import * as React from 'react';
import { Provider } from 'react-redux';
import routes from '../../routes/routes';
import { appStarted } from './../../actions/app-actions';
import { Store } from 'redux';
import { Router, browserHistory } from 'react-router';

interface IAppProps {
  store: Store;
}

interface IAppState {
}

export default class AppView extends React.Component<IAppProps, IAppState> {

  public componentDidMount (): void {
    this.props.store.dispatch(appStarted());
  }

  public render(): React.ReactElement<{}> {
    return (
      <div>
        <Provider store={this.props.store}>
          <Router history={browserHistory}>
            {routes}
          </Router>
        </Provider>
      </div>
    );
  }
}
