import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Index from './components/Index/index';
import Store from './store/configure';


const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <Index />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
