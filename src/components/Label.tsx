import ArticleLabel from "./ArticleLabel"
import type { ArticleLabelData } from "../dataStructure"

export default function Label({ data }: { data: ArticleLabelData[] }) {
    const labels = [...data]
    while (labels.length < 3) {
        labels.push({ prix: '', remise: '', discounted: '' })
    }
    return (
        <div className="flex justify-center items-center self-center text-center p-2">
            {labels.map((item, index) => (
                <ArticleLabel key={index} {...item} />
            ))}
        </div>
    )
}