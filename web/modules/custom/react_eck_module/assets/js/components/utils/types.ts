// @ts-nocheck

export enum AppData {
  SET_DATA = 'SET_DATA'
}

export enum AppState {
  IS_LOADING = 'IS_LOADING',
  ERROR = 'ERROR',
}
export type EckEntityContextT = {
  eckEntity: string
}

export type State = {
  loading: boolean
  error: boolean
}

export type Data = Array<{
  title: string;
  copy: string;
}>;


export type StateAction = {
  type: AppState
  mode: any
  action: any
  initial: any
}