import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { result } = location.state || {};

  const yoloImg = result?.yolo_result;
  const boxes = result?.yolo_boxes || [];
  const gradcamImg = result?.gradcam;
  const limeImg = result?.lime;
  const cnnPrediction = result?.cnn_prediction;
  const limeText = result?.lime_explanation;
  const modelUsed = result?.model_used;
  const labelAgreement = result?.label_agreement;
  const mappedYoloClasses = result?.mapped_yolo_classes || [];

  const noResults = boxes.length === 0 && !cnnPrediction;
  const uniqueBoxes = [...new Map(boxes.map(item => [item.class, item])).values()];

  const downloadReport = async () => {
    const pdf = new jsPDF("p", "mm", "a4");
    let y = 20;

    pdf.setFontSize(16);
    pdf.setTextColor(33, 33, 33);
    pdf.text("Skin Analysis Report – XAI SkinSense", 20, y);
    y += 8;

    pdf.setFontSize(10);
    pdf.text(`Generated: ${new Date().toLocaleString()}`, 20, y);
    y += 10;

    const addImage = async (img, title) => {
      if (!img) return;
      pdf.setFontSize(12);
      pdf.setTextColor(255, 87, 34);
      pdf.text(title, 105, y, { align: "center" });
      y += 3;
      const image = new Image();
      image.src = `data:image/png;base64,${img}`;
      await new Promise(resolve => (image.onload = resolve));
      const ratio = image.width / image.height;
      const imgWidth = 80;
      const imgHeight = imgWidth / ratio;
      pdf.addImage(image, "PNG", 65, y, imgWidth, imgHeight);
      y += imgHeight + 8;
    };

    await addImage(yoloImg, "Acne Region Detected Areas");
    if (gradcamImg || limeImg) {
      pdf.setFontSize(12);
      pdf.text("Explainability Maps", 105, y, { align: "center" });
      y += 4;
      if (gradcamImg) {
        const gImg = new Image();
        gImg.src = `data:image/png;base64,${gradcamImg}`;
        await new Promise(resolve => (gImg.onload = resolve));
        pdf.addImage(gImg, "PNG", 40, y, 50, 40);
      }
      if (limeImg) {
        const lImg = new Image();
        lImg.src = `data:image/png;base64,${limeImg}`;
        await new Promise(resolve => (lImg.onload = resolve));
        pdf.addImage(lImg, "PNG", 110, y, 50, 40);
      }
      y += 45;
    }

    if (limeText) {
      pdf.setFontSize(11);
      pdf.setTextColor(33, 33, 33);
      pdf.setDrawColor(255, 193, 7);
      pdf.setLineWidth(0.3);
      pdf.rect(20, y, 170, 30);
      pdf.text("Explanation – AI's Reasoning Behind the Prediction", 105, y + 6, { align: "center" });
      pdf.setFontSize(9);
      pdf.text(limeText, 25, y + 14, { maxWidth: 160 });
      y += 40;
    }

    if (!noResults) {
      pdf.setFontSize(12);
      pdf.setTextColor(255, 87, 34);
      pdf.text("Detected Acne Type & Severity", 105, y, { align: "center" });
      y += 6;
      uniqueBoxes.forEach(box => {
        pdf.setFontSize(10);
        pdf.setTextColor(0);
        pdf.text(`Type: ${box.class} | Confidence: ${(box.conf * 100).toFixed(1)}%`, 30, y);
        y += 5;
      });
      if (cnnPrediction) {
        y += 4;
        pdf.setTextColor(255, 87, 34);
        pdf.setFontSize(12);
        pdf.text("AI's Overall Acne Type Assessment", 105, y, { align: "center" });
        y += 6;
        pdf.setTextColor(0);
        pdf.setFontSize(10);
        pdf.text(`Type: ${cnnPrediction.label}`, 30, y);
        y += 5;
        pdf.text(`Confidence: ${(cnnPrediction.confidence * 100).toFixed(1)}%`, 30, y);
        y += 6;
        if (labelAgreement === false) {
          pdf.setTextColor(200, 0, 0);
          pdf.setFontSize(9);
          pdf.text("⚠️ CNN and YOLO disagree on acne type.", 30, y);
          y += 5;
        }
      }
    }

    y += 10;
    pdf.setTextColor(66);
    pdf.setFontSize(9);
    pdf.text("Note: This report is for informational use only. Not a substitute for medical advice.", 20, y);

    pdf.save("skin-analysis-report.pdf");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-amber-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white flex flex-col items-center py-12 px-6 transition-colors duration-300">
      <div className="text-center max-w-3xl mb-6">
        <h1 className="text-5xl font-extrabold text-amber-700 dark:text-amber-400 mb-4">
          Your Skin Analysis Result
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Here's what our AI detected about your skin condition, explained clearly and gently.
        </p>
        {modelUsed && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
            Model used: {modelUsed}
          </p>
        )}
      </div>

      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <button
          onClick={downloadReport}
          className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-full shadow transition duration-300"
        >
          📄 Download Report
        </button>
        <button
          onClick={() => navigate("/detect")}
          className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-amber-700 dark:text-amber-300 font-semibold py-2 px-6 rounded-full border border-amber-500 shadow"
        >
          🔄 Scan Another Image
        </button>
      </div>

      <div id="report-section" className="w-full flex flex-col items-center">
        {yoloImg && (
          <div className="mb-12 text-center">
            <h2 className="text-xl font-semibold text-amber-600 dark:text-amber-400 mb-3">Acne Region Detected Areas</h2>
            <img
              src={`data:image/png;base64,${yoloImg}`}
              alt="YOLOv8 Result"
              className="w-full max-w-md h-auto object-contain rounded-xl shadow-md"
            />
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
          {gradcamImg && (
            <div className="text-center">
              <h2 className="text-lg font-semibold text-amber-600 dark:text-amber-400 mb-2">Our Model’s Focus Areas</h2>
              <img
                src={`data:image/png;base64,${gradcamImg}`}
                alt="Grad-CAM"
                className="w-64 h-auto object-contain rounded-xl shadow"
              />
            </div>
          )}
          {limeImg && (
            <div className="text-center">
              <h2 className="text-lg font-semibold text-amber-600 dark:text-amber-400 mb-2">Key Influence Zones</h2>
              <img
                src={`data:image/png;base64,${limeImg}`}
                alt="LIME"
                className="w-64 h-auto object-contain rounded-xl shadow"
              />
            </div>
          )}
        </div>

        {limeText && (
          <div className="mb-12 text-center max-w-xl bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-amber-300 dark:border-amber-600 mx-auto">
            <h2 className="text-2xl font-semibold text-amber-700 dark:text-amber-400 mb-3">
              Explanation – AI's Reasoning Behind the Prediction
            </h2>
            <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-line">
              {limeText}
            </p>
          </div>
        )}

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-10 flex flex-col items-center max-w-2xl w-full space-y-6">
          {noResults ? (
            <p className="text-xl text-gray-500 dark:text-gray-400">No acne detected in the image.</p>
          ) : (
            <>
              {uniqueBoxes.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-400">Detected Acne Type & Severity</h2>
                  {uniqueBoxes.map((det, index) => (
                    <div key={index} className="mb-4">
                      <p className="text-lg text-gray-700 dark:text-gray-300">Type: <strong>{det.class}</strong></p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Confidence: {(det.conf * 100).toFixed(1)}%
                      </p>
                      <hr className="my-2 border-gray-300 dark:border-gray-700" />
                    </div>
                  ))}
                </>
              )}

              {cnnPrediction ? (
                <div className="text-center w-full">
                  <h2 className={`text-2xl font-bold mb-2 ${labelAgreement === false ? "text-red-700" : "text-amber-700 dark:text-amber-400"}`}>
                    AI's Overall Acne Type Assessment
                  </h2>
                  <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">{cnnPrediction.label}</p>

                  <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-4 mt-2 mb-1">
                    <div
                      className="bg-amber-500 h-4 rounded-full transition-all duration-300"
                      style={{ width: `${cnnPrediction.confidence * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Confidence: {(cnnPrediction.confidence * 100).toFixed(1)}%
                  </p>

                  {cnnPrediction.confidence < 0.1 && (
                    <p className="text-red-600 text-sm mt-2">
                      ⚠️ Confidence is low. Consider retaking the image or consulting a dermatologist.
                    </p>
                  )}

                  {labelAgreement === false && (
                    <div className="mt-4 p-3 bg-red-100 dark:bg-red-950 border border-red-300 rounded-xl text-red-700 text-sm shadow-inner">
                      ⚠️ The CNN model's prediction <strong>does not match</strong> YOLOv8 detection. <br />
                      <strong>CNN:</strong> {cnnPrediction.label}<br />
                      <strong>YOLOv8:</strong> {mappedYoloClasses.join(", ") || "None detected"}
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  No confident CNN prediction available (likely no visible acne).
                </p>
              )}
            </>
          )}

          <div className="bg-amber-100 dark:bg-amber-900 p-4 rounded-xl text-amber-800 dark:text-amber-200 text-center text-sm mt-6 shadow-inner">
            <p>
              Note: This analysis is for informational purposes only.
              For medical advice, please consult a dermatologist. 🌸
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-12">
        <p><em>Understanding your skin is the first step toward healthy beauty. 🤍</em></p>
      </div>
    </div>
  );
};

export default Result;