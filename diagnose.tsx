import Sidebar from "../components/Sidebar";
import WebcamCapture from "../components/WebcamCapture";

export default function Diagnose() {
  return (
    <div>
      <Sidebar />
      <main className="min-h-screen flex flex-col justify-center items-center px-4">
        <div className="bg-black/70 rounded-3xl p-10 shadow-2xl max-w-xl w-full text-center border border-gray-800">
          <h1 className="text-3xl font-bold mb-8">顔画像を撮影して診断</h1>
          <WebcamCapture />
          <div className="mt-10 text-gray-400 text-xs">
            画像はDiscord経由でAI診断サーバーに即時送信されます。<br />
            プライバシーを重視し、画像は本サイトには保存されません。
          </div>
        </div>
      </main>
    </div>
  );
}
