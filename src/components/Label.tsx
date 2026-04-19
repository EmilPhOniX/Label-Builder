import ArticleLabel from "./ArticleLabel"

export default function Label() {
    return (
        <div className="flex justify-center gap-15 items-center self-center text-center p-2">
            <ArticleLabel />
            <ArticleLabel />
            <ArticleLabel />
        </div>
    )
}