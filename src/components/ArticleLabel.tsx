import type { ArticleLabelData } from "../dataStructure"

export default function ArticleLabel({ prix, remise, discounted }: ArticleLabelData) {
    return (
        <div className="flex flex-col text-center gap-4">
            <div>{prix || ' '}</div>
            <div>{remise || ' '}</div>
            <div>{discounted || ' '}</div>
        </div>
    )
}