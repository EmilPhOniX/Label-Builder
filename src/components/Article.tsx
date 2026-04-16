import { useState } from "react"

export default function Article({ onDelete }: { onDelete: () => void }) {
    const [discounted, setDiscounted] = useState(0);

    function getDiscountedPrice() {
        const priceInput = document.querySelector("#prix input") as HTMLInputElement;
        const discountInput = document.querySelector("#remise input") as HTMLInputElement;
        const price = parseFloat(priceInput.value);
        const discount = parseFloat(discountInput.value);

        setDiscounted(price - (isNaN(price) ? 0 : price * (isNaN(discount) ? 0 : discount) / 100));
    }

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
                <input onChange={() => getDiscountedPrice()} type="text" />
            </div>

            <div id="remise" className="flex flex-col align-middle gap-1 justify-center text-center">
                <label>Remise %</label>
                <input onChange={() => getDiscountedPrice()} type="text" />
            </div>

            <div id="discounted" className="flex flex-col align-middle gap-1 justify-center text-center">
                <label>Prix Remis</label>
                <input
                    value={!isNaN(discounted) ? discounted : 0}
                    type="text"
                    className="bg-gray-200 cursor-not-allowed"
                    disabled
                />
            </div>

            <div id="quantite" className="flex flex-col align-middle gap-1 justify-center text-center">
                <label>Quantité</label>
                <input type="text" />
            </div>
        </div>
    )
}