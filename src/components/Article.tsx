import { useState } from "react"
import { updateSheet } from "../updateSheet"

export default function Article({ id, onDelete }: { id: number; onDelete: () => void }) {
    const [prix, setPrix] = useState("")
    const [remise, setRemise] = useState("")

    const entryPrice = parseFloat(prix)
    const price = entryPrice * 1.4
    const discount = parseFloat(remise)
    const discounted = isNaN(price)
        ? 0
        : price - price * (isNaN(discount) ? 0 : discount) / 100

    return (
        <div id={`${id}`} className="flex flex-col sm:flex-row gap-2">
            <button
                type="button"
                onClick={onDelete}
                className="self-end rounded-lg bg-red-800 px-3 h-6 text-white justify-end text-sm"
            >
                -
            </button>
            <div className="flex flex-col align-middle gap-1 justify-center text-center">
                <label className="text-sm">Prix</label>
                <input
                    value={prix}
                    onChange={(e) => setPrix(e.target.value)}
                    type="text"
                    className="text-sm w-16"
                />
            </div>
            <div className="flex flex-col align-middle gap-1 justify-center text-center">
                <label className="text-sm">Remise %</label>
                <input
                    value={remise}
                    onChange={(e) => setRemise(e.target.value)}
                    type="text"
                    className="text-sm w-16"
                />
            </div>
            <div className="flex flex-col align-middle gap-1 justify-center text-center">
                <label className="text-sm">Prix Remis</label>
                <input
                    value={discounted ? discounted.toFixed(2) : 0}
                    type="text"
                    className="bg-gray-200 cursor-not-allowed text-sm w-16"
                    disabled
                />
            </div>
            <div className="flex flex-col align-middle gap-1 justify-center text-center">
                <label className="text-sm">Quantité</label>
                <input onChange={() => updateSheet()} type="text" className="text-sm w-16" />
            </div>
        </div>
    )
}