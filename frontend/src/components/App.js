import '../App.css';

import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Page404 from './Page404'
import LoginBox from './LoginBox'
import LamePage from './LamePage'


class App extends Component {
  render() {
    
    return (
        <MuiThemeProvider> 
            <Switch>
                <Route exact path="/" render={({ history }) => (<LamePage history={history} />)} />
                <Route exact path="/login" component={LoginBox} />
                <Route component={Page404} />
            </Switch>
        </MuiThemeProvider>

    );
  }
}


export default App
