import type { ArticleData } from "../dataStructure"

export default function Article({ article, onDelete, onUpdate }: { article: ArticleData; onDelete: () => void; onUpdate: (updated: ArticleData) => void }) {
    const entryPrice = parseFloat(article.prix)
    const price = isNaN(entryPrice) ? 0 : entryPrice * 1.45
    const discount = parseFloat(article.remise)
    const discounted = price - price * (isNaN(discount) ? 0 : discount) / 100

    const handleChange = (field: keyof ArticleData, value: string) => {
        onUpdate({ ...article, [field]: value })
    }

    return (
        <div id={`article-${article.id}`} className="flex flex-col sm:flex-row gap-2 ">
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
                    value={article.prix}
                    onChange={(e) => handleChange('prix', e.target.value)}
                    type="text"
                    className="text-sm w-16"
                />
            </div>
            <div className="flex flex-col align-middle gap-1 justify-center text-center">
                <label className="text-sm">Remise %</label>
                <input
                    value={article.remise}
                    onChange={(e) => handleChange('remise', e.target.value)}
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
                <input
                    value={article.quantity}
                    onChange={(e) => handleChange('quantity', e.target.value)}
                    type="text"
                    className="text-sm w-16"
                />
            </div>
        </div>
    )
}