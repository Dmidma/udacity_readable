import React, { Component } from 'react'


// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import { actionCreator } from '../actions'


class LamePage extends Component {
    componentWillMount() {
        if (this.props.userName === null) {
            this.props.history.push("/login")
        }
    }


    render() {
        return (
            <div>
                This is LamePage component.
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


// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LamePage))
export default connect(mapStateToProps, mapDispatchToProps)(LamePage)
