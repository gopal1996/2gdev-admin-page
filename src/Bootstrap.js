import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Company from './components/Company';
import App from './App';

const Bootstrap = () => {
    
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={Login} />
                    <ProtectedRoute path="/company" component={() => <Company />} />
                    <ProtectedRoute path="/:id/admin" component={App} />
                    <ProtectedRoute path="*" component={App} />
                    
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Bootstrap
