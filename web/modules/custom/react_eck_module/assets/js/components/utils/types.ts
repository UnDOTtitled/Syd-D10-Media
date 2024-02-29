// @ts-nocheck

export enum AppData {
  SET_DATA = 'SET_DATA'
}

export enum AppState {
  IS_LOADING = 'IS_LOADING',
  ERROR = 'ERROR',
}

export type StateContextT = {
  state: State
  data: Data
}

export type DispatchContextT = {
  dispatch: React.Dispatch<any>
  dataDispatch: React.Dispatch<any>
}

export type EckEntityContextT = {
  eckEntity: string
}

export type State = {
  loading: boolean
  error: boolean
}

export type Data = {
  loadedAppData?: [],
}

export type DataAction = {
  type: AppData
  mode: []
}

export type StateAction = {
  type: AppState
  mode: any
  action: any
  initial: any
}

export type NodeEntity = {
  nid: number
  name: string
  slug?: string
}
