import { Component } from 'react'

import HeaderActionBarTemplate from '../templates/HeaderActionBarTemplate'


// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeUser } from '../actions/loggedUserActions'


class HeaderActionBar extends Component {

    state = {
        value: 3
    }
    
    handleChange = (event, index, value) => this.setState({value})

    handleLogoutOnClik = () => {
        this.props.logout()
        this.props.history.push("/login")
    }

    render() {
        return (
            HeaderActionBarTemplate(this.handleChange, this.value, this.handleLogoutOnClik)
        )
    }
}


function mapDispatchToProps (dispatch) {
    return {
        logout: () => dispatch(removeUser())
    }
}


// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderActionBar))
export default connect(null, mapDispatchToProps)(HeaderActionBar)
