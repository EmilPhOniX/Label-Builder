import { useState } from "react"
import Article from "../components/Article"

export default function ArticleForm() {
    const [articles, setArticles] = useState([0])

    function addArticle() {
        setArticles((prev) => [...prev, prev.length])
    }

    function deleteArticle(index: number) { 
        setArticles((prev) => prev.filter((_, i) => i !== index))
    }

    return (
        <div className="flex flex-col gap-5">
            <button
                type="button"
                onClick={addArticle}
                id="addArticle"
                className="rounded-2xl bg-red-500 px-5 text-center text-white align-middle max-w-max">
                + Ajouter un {articles.length + 1}{articles.length ? "ème" : "er"} article
            </button>
            <form
                id="page-form"
                className="border"
                action=""
            >
                {articles.map((_, index) => (
                    <Article key={index} id={index} onDelete={() => deleteArticle(index)} />
                ))}
            </form>
        </div>
    )
}