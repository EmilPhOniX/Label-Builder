import type { ArticleLabelData } from "../dataStructure"

export default function ArticleLabel({ prix, remise, discounted }: ArticleLabelData) {
    return (
        <div className="flex flex-col text-center gap-4 w-full ">
            <div className="h-6 w-full">{prix || ' '}</div>
            <div className="h-6 w-full">{remise || ' '}</div>
            <div className="h-6 w-full">{discounted || ' '}</div>
        </div>
    )
}