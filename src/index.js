import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import Dashboard from "./components/Dashboard";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.css";
import './resources/style.scss'

ReactDOM.render(<Provider store={store}><Dashboard /></Provider>, document.getElementById('root'));

