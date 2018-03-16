import { Component } from 'react'


// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addUser } from '../actions/loggedUserActions'

import CardExampleWithAvatar from '../templates/LoginBoxTemplate'


class LoginBox extends Component {

    componentWillMount() {
        if (this.props.userName !== null) {
            this.props.history.push("/")
        }
    }
    
    state = {
        username: null
    }

    handleButton() {
        this.props.addUser(this.state.username)
        this.props.history.push("/")
    }


    handleUsernameInput = (e) => {
        this.setState({username: e.target.value})
    }

    render() {
        return (
            CardExampleWithAvatar(
                this.handleButton.bind(this),
                this.handleUsernameInput)
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
        addUser: (username) => dispatch(addUser(username))
    }
}


// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginBox))
export default connect(mapStateToProps, mapDispatchToProps)(LoginBox)
