import { useState } from "react"
import ArticleForm from "./components/ArticleForm"
import Preview from "./components/Preview"
import type { ArticleData } from "./dataStructure"

export default function App() {
  const [articles, setArticles] = useState<ArticleData[]>([{ id: 1, prix: '', remise: '', quantity: '' }])

  return (
    <div className="flex">
      <ArticleForm articles={articles} setArticles={setArticles} />
      <Preview articles={articles} />
    </div>
  )
}