import type { ArticleLabelData } from "../dataStructure"

export default function ArticleLabel({ prix, remise, discounted }: ArticleLabelData) {
    return (
        <div className="flex flex-col text-center gap-4 w-full">
            <div className="h-6 w-full relative flex items-center justify-center">
                <span className="line-through decoration-black decoration-2">{prix || ' '}</span>
            </div>
            <span className="h-6 w-full">{remise || ' '}</span>
            <span className="h-6 w-full">{discounted || ' '}</span>
        </div>
    )
}