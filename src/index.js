import React from 'react';
import ReactDOM from 'react-dom';

//add for functionality of react-vis in IE
import "babel-polyfill";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
