import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <main className="min-h-screen flex flex-col justify-center items-center px-4">
        <div className="bg-black/70 rounded-3xl p-10 shadow-2xl max-w-xl w-full text-center border border-gray-800">
          <h1 className="text-4xl font-extrabold mb-6 tracking-wider">顔年齢診断</h1>
          <p className="text-xl mb-8 font-medium">
            AIであなたの顔から年齢を診断します。
            <br />
            <span className="text-base text-gray-300">
              最新AI技術により様々な顔情報を分析し、極めて正確な診断を実現。
            </span>
          </p>
          <div className="mb-2 text-lg">
            <span className="font-semibold">1.</span> サイドバー（三本線）から「Diagnosis」に進んでください。
          </div>
          <div className="mb-2 text-lg">
            <span className="font-semibold">2.</span> 「画像を撮る」ボタンから診断を開始できます。
          </div>
          <div className="mt-8 text-gray-400 text-sm">
            Powered by Next.js / TailwindCSS / AI Technology<br/>
            本サービスは画像データをAIエンジンに安全送信します。
          </div>
        </div>
      </main>
    </div>
  );
}
