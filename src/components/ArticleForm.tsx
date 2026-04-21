import Article from "../components/Article"
import type { ArticleData } from "../dataStructure";

export default function ArticleForm({ articles, setArticles }: { articles: ArticleData[]; setArticles: (articles: ArticleData[]) => void }) {

    function addArticle() {
        setArticles([...articles, { id: articles.length + 1, prix: '', remise: '', quantity: '', decalage: 0 }])
    }

    function deleteArticle(id: number) {
        setArticles(articles.filter((a) => a.id !== id))
    }

    function updateArticle(id: number, updated: ArticleData) {
        setArticles(articles.map((a) => a.id === id ? updated : a))
    }

    return (
        <div className="flex flex-col gap-5 m-5">
            <button
                type="button"
                onClick={addArticle}
                id="addArticle"
                className="rounded-2xl bg-red-500 px-5 text-center text-white align-middle max-w-max">
                + Ajouter un {articles.length + 1}{articles.length ? "ème" : "er"} article
            </button>
            <form
                id="page-form"
                className="border w-84 min-h-14 p-2"
            >
                {articles.map((article) => (
                    <Article key={article.id} article={article} onDelete={() => deleteArticle(article.id)} onUpdate={(updated) => updateArticle(article.id, updated)} />
                ))}
            </form>
        </div>
    )
}