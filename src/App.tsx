import { useState } from "react"
import ArticleForm from "./components/ArticleForm"
import Preview from "./components/Preview"
import Decalage from "./components/Decalage"
import type { ArticleData } from "./dataStructure"

export default function App() {
  const [articles, setArticles] = useState<ArticleData[]>([{ id: 1, prix: '', remise: '', quantity: '', decalage: 0 }])
  const [decalage, setDecalage] = useState<number>(0)

  return (
    <div className="flex">
      <div>
        <ArticleForm articles={articles} setArticles={setArticles} />
        <Decalage decalage={decalage} setDecalage={setDecalage} />
      </div>
      <Preview articles={articles} decalage={decalage} />
    </div>
  )
}