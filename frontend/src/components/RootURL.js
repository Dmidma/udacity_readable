import React, { Component } from 'react'


// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import { actionCreator } from '../actions'

class RootURL extends Component {

    componentDidMount() {
        if (this.props.username === null) {
            this.props.history.push("/login")
        } else {
            this.props.history.push("/feed")
        }
    }

    render() {
        return null
    }
}

function mapStateToProps ({ loggedUser}) {
    return {
        username: loggedUser.name
    }
}

function mapDispatchToProps (dispatch) {
    return {
        // propsName: () => dispatch(actionCreator())
    }
}


// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RootURL))
export default connect(mapStateToProps, mapDispatchToProps)(RootURL)
