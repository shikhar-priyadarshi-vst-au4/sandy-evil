import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './Store/index'
import { App } from './Components/App';
import './index.css';

ReactDOM.render(
            < Provider store = { configureStore() } > 
                  < App />
            </ Provider > , document.getElementById('root'));

