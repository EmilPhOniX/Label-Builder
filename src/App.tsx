import { useState } from "react";
import Header from "./components/Header.tsx";
import LabelBuilder from "./pages/LabelBuilder.tsx";
import NouveauteEditor from "./pages/NouveauteEditor.tsx";

export default function App() {
  const [activeView, setActiveView] = useState("labelBuilder");

  return (
    <div>
      <Header activeView={activeView} setActiveView={setActiveView} />
      <div className="flex">
        {activeView === "labelBuilder" && <LabelBuilder />}
        {activeView === "nouveauteEditor" && <NouveauteEditor />}
      </div>
    </div>
  );
}
