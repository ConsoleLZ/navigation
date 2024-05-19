interface Project{
    id:number
    name:string
    description:string
    img:string
    tags:Array<string>
    ckURL:string
    prURL:string
    time:string
}

type projectArr = Array<Project>

export type {
    projectArr
}