import React, { Component } from 'react'


// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import { actionCreator } from '../actions'

import HeaderActionBar from './HeaderActionBar'


class FeedPage extends Component {
    componentWillMount() {
        if (this.props.userName === null) {
            this.props.history.push("/login")
        }
    }


    render() {
        return (
            <div>
                <HeaderActionBar history={this.props.history} />
                This is FeedPage component.
            </div>
        )
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


export default connect(mapStateToProps, mapDispatchToProps)(FeedPage)
