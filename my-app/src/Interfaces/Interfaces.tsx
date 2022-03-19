export interface ILaunch {
    id: string,
    mission_name: string,
    __typename: string
}
export interface IData {
    launchesPast: ILaunch[]
}