interface Github{
    id:number
    name:string
    url:string
    description:string
    language:string
    star:string
    fork:string
}

type GithubArr = Array<Github>

export type {
    GithubArr
}