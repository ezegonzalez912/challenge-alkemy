import React, { useContext } from 'react'
import { HashRouter as Router, Switch } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { AuthContext } from '../context/auth/AuthContext'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {

    const {user} = useContext(AuthContext)

    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/login" component={ LoginScreen } isAuthenticated={user.logged}/>
                <PrivateRoute path="/" component={ DashboardRoutes } isAuthenticated={user.logged}/>
            </Switch>
        </Router>
    )
}
