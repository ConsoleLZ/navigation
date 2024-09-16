interface webData {
    id: number
    name: string
    ico: string
    url: string
    description: string
}

export interface StateModel {
    [key: string]: any;
    webTime: string
    aboutFrontEnd: webData[],
    documentation: webData[],
    UIFramework: webData[],
    material: webData[],
    design: webData[],
    tools: webData[],
    AI: webData[],
    cloudPlatform: webData[],
    networkSecurity: webData[],
    study: webData[],
    games: webData[],
    other: webData[]
}