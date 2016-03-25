import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore } from 'redux';

import './styles/core.scss';


import reducers from './reducers/reducers';
import AppView from './views/app/app-view';

declare const require: (name: String) => any;

interface IHotModule {
  hot?: { accept: (path: string, callback: () => void) => void };
}

declare const module: IHotModule;

const store: Store = createStore(reducers);

ReactDOM.render(<AppView store={store}/>, document.getElementById('app'));

// accept hot module reloading during development
if (module.hot) {
  // enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('./reducers/reducers', () => {
      const nextRootReducer: any = require('./reducers/reducers').reducers;
      store.replaceReducer(nextRootReducer);
    });
  }
}
