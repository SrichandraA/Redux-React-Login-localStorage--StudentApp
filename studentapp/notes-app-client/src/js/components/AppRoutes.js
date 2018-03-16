import React , {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import Students from './Students';
import Login from './Login';
import { login, logout, isLoggedIn } from './AuthService';

class AppRoutes extends Component{

    render(){
        return(
                    <Router>
                        <Switch>
                            <Route exact path='/' component={App} />
                            <Route exact path='/studentApp' component={Students} />
                            <Route exact path='/login' component={Login}  />

                        </Switch>
                    </Router>
        )
    }
}
export default AppRoutes;