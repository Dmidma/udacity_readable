import '../App.css';

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Page404 from './Page404'


// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import { actionCreator } from '../actions'


class App extends Component {
  render() {
    return (
    
        <Switch>
        <Route exact path="/" render={() => {
            return (
              <div className="App">
                <header className="App-header">
                  <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p>
              </div>
            )
        }} />
            <Route component={Page404} />
        </Switch>

    );
  }
}

function mapStateToProps ({ loggedUser }) {
    return {
        userName: loggedUser.name
    }
}

function mapDispatchToProps (dispatch) {
    return {
        // propsName: () => dispatch(actionCreator())
    }
}


// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
export default connect(mapStateToProps, mapDispatchToProps)(App)
