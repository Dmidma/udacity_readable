import '../App.css';

import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Page404 from './Page404'
import LoginBox from './LoginBox'
import FeedPage from './FeedPage'
import APost from './APost'


class App extends Component {
  render() {
    
    return (
        <MuiThemeProvider> 
            <Switch>
                <Route exact path="/" component={FeedPage} />
                <Route exact path="/login" component={LoginBox} />
                <Route path="/:category/:post_id" component={APost} />
                <Route component={Page404} />
            </Switch>
        </MuiThemeProvider>

    );
  }
}


export default App
