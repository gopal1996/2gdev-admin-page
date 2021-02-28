import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './styles/main.scss'
// import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import Login from './pages/Login';
// import ProtectedRoute from './components/ProtectedRoute';
// import Company from './components/Company';
import Bootstrap from './Bootstrap'

ReactDOM.render(
  <React.StrictMode>
    <Bootstrap />
  </React.StrictMode>,
  document.getElementById('root')
);
