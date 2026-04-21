export type ArticleData = {
    id: number
    prix: string
    remise: string
    quantity: string
    decalage: number
}

export type ArticleLabelData = {
    prix: string
    remise: string
    discounted: string
    isEmpty?: boolean
}