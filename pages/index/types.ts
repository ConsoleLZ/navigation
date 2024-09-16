interface webData {
    id: number
    name: string
    ico: string
    url: string
    description: string
}

export interface StateModel {
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
    other: webData[],
    isData1: boolean,
    isData2: boolean,
    isData3: boolean,
    isData4: boolean,
    isData5: boolean,
    isData6: boolean,
    isData7: boolean,
    isData8: boolean,
    isData9: boolean,
    isData10: boolean,
    isData11: boolean,
    isData12: boolean,
}