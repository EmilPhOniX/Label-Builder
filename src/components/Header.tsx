export default function Header({ activeView, setActiveView }) {
  return (
    <header className="m-2 flex gap-2">
      <button
        onClick={() => setActiveView("labelBuilder")}
        className="rounded-xs bg-red-500 px-5 text-center text-white cursor-pointer"
      >
        Label Builder
      </button>
      <button
        onClick={() => setActiveView("nouveauteEditor")}
        className="rounded-xs bg-blue-500 px-5 text-center text-white cursor-pointer"
      >
        Nouveauté Editor
      </button>
    </header>
  );
}
