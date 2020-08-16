import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.css";
import './resources/style.scss'
import App from './App'


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

