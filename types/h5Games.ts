interface H5Games{
    id:number
    name:string
    url:string
    img:string
    description?:string
}

type H5GamesArr = Array<H5Games>

export type {
    H5GamesArr
}