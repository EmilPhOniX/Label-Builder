export default function Decalage({ setDecalage }: { decalage: number; setDecalage: (v: number) => void }) {
    return (
        <div className="flex flex-col m-5">
            <label>Décalage d'étiquette</label>
            <input
                type="number"
                onChange={(e) => setDecalage(Math.min(24, Math.max(0, parseInt(e.target.value) || 0)))}
                min={0}
                max={24}
            />
        </div>
    )
}