interface HeaderProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export default function Header({ activeView, setActiveView }: HeaderProps) {
  return (
    <header className="m-2 flex gap-2">
      <button
        onClick={() => setActiveView("labelBuilder")}
        className={`rounded-xs px-5 text-center text-white cursor-pointer ${
          activeView === "labelBuilder" ? "bg-[#006602]" : "bg-gray-400"
        }`}
      >
        Label Builder
      </button>
      <button
        onClick={() => setActiveView("nouveauteEditor")}
        className={`rounded-xs px-5 text-center text-white cursor-pointer ${
          activeView === "nouveauteEditor" ? "bg-red-500" : "bg-gray-400"
        }`}
      >
        Nouveauté Editor
      </button>
    </header>
  );
}
