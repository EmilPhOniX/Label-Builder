import Affiche from "./Affiche";

export default function AfficheForm() {
  return (
    <div className="flex flex-col gap-5 m-5">
      <label>Format</label>
      <select>
        <option value="A4PA">A4 Paysage</option>
        <option value="A4PO">A4 Portrait</option>
        <option value="A6">A6</option>
      </select>

      <Affiche />
    </div>
  );
}
