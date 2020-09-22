import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import {DataLayer} from './components/DataLayer';
import reducer, {initialState} from './reducer';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
       <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
