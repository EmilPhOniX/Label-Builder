import { useState } from "react"
import Article from "./components/Article"

export default function App() {
  const [articles, setArticles] = useState([0])

  function addArticle() {
    setArticles((prev) => [...prev, prev.length])
  }

  function deleteArticle(index: number) {
    setArticles((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <>
      <button
        type="button"
        onClick={addArticle}
        id="addArticle"
        className="rounded-2xl bg-red-500 px-5 text-center text-white align-middle">
        + Ajouter un {articles.length + 1}{articles.length ? "ème" : "er"} article
      </button>
      <form
        id="page-form"
        className="border"
        action=""
      >
        {articles.map((_, index) => (
          <Article key={index} onDelete={() => deleteArticle(index)} />
        ))}
      </form>
    </>
  )
}