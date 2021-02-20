import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.scss'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Login} />
        <ProtectedRoute path="/admin" component={App} />
        {/* <ProtectedRoute path="*" component={App} /> */}
        
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
