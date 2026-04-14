export default function Article({ onDelete }: { onDelete: () => void }) {

    return (
        <div id="article" className="flex flex-row gap-4">
            <button
                type="button"
                onClick={onDelete}
                className="self-end rounded-lg bg-red-800 px-5 h-7 text-white justify-end"
            >
                -
            </button>

            <div id="prix" className="flex flex-col align-middle gap-1 justify-center text-center">
                <label>Prix</label>
                <input type="text" />
            </div>

            <div id="remise" className="flex flex-col align-middle gap-1 justify-center text-center">
                <label>Remise</label>
                <input type="text" />
            </div>

            <div id="discounted" className="flex flex-col align-middle gap-1 justify-center text-center">
                <label>Prix Remis</label>
                <input className="bg-gray-200 cursor-not-allowed" type="text" disabled />
            </div>

            <div id="quantite" className="flex flex-col align-middle gap-1 justify-center text-center">
                <label>Quantité</label>
                <input type="text" />
            </div>
        </div>
    )
}