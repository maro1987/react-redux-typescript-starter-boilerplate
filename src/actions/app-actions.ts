export enum APP_ACTION { AppStarted }

export interface IAppAction {
  type: APP_ACTION;
}

export function appStarted(): IAppAction {
  return { type: APP_ACTION.AppStarted };
}
