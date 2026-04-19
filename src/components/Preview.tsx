import Label from "./Label"

import type { ArticleData, ArticleLabelData } from "../dataStructure"

export default function Preview({ articles }: { articles: ArticleData[] }) {
    const allLabels: ArticleLabelData[][] = []

    for (const article of articles) {
        const entryPrice = parseFloat(article.prix)
        const price = entryPrice * 1.4
        const discount = parseFloat(article.remise)
        const discounted = isNaN(price) ? 0 : price - price * (isNaN(discount) ? 0 : discount) / 100
        const qty = parseInt(article.quantity) || 0

        for (let i = 0; i < qty; i++) {
            if (allLabels.length === 0 || allLabels[allLabels.length - 1].length === 3) {
                allLabels.push([])
            }
            allLabels[allLabels.length - 1].push({
                prix: price.toFixed(2),
                remise: article.remise,
                discounted: discounted.toFixed(2)
            })
        }
    }

    const numberOfLabels = allLabels.length
    const rows = Math.min(8, Math.ceil(numberOfLabels / 3))
    const cols = 3

    const handlePrint = () => {
        window.print()
    }

    return (
        <div className="preview-root">
            <div className="mb-4 no-print">
                <button
                    type="button"
                    className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    onClick={handlePrint}
                >
                    Imprimer la preview
                </button>
            </div>

            <div className="print-wrapper">
                <div className="preview-sheet bg-red-50">
                    <table className="fiche w-full h-full border-collapse" style={{ minHeight: '100%' }}>
                        <tbody>
                            {Array.from({ length: rows }, (_, rowIndex) => (
                                <tr key={rowIndex}>
                                    {Array.from({ length: cols }, (_, colIndex) => {
                                        const labelIndex = rowIndex * cols + colIndex
                                        const data = labelIndex < numberOfLabels ? allLabels[labelIndex] : []
                                        return (
                                            <td
                                                key={colIndex}
                                                className="p-1 align-top"
                                                style={{ width: '33.333%', height: `${100 / rows}%` }}
                                            >
                                                <Label data={data} />
                                            </td>
                                        )
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
