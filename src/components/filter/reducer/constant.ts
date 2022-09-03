import { IState } from "../interface";
// 用于记录初始的filter便于clear
let defaultFilter: IState| null = null

export const setDefaultFilter = (filter: IState) => {
    defaultFilter = filter
}

export const getDefaultFilter = () => {
    return defaultFilter
}