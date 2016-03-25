import { IAppAction, APP_ACTION } from './../actions/app-actions';
import * as Immutable from 'immutable';

const initialState: any = Immutable.fromJS({});

export default function appReducer(state: Object = initialState, action: IAppAction): Object {
  switch (action.type) {
    case APP_ACTION.AppStarted:
      return state;

    default:
      return state;
  }
}
