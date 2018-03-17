import { Component } from 'react'
import PropTypes from 'prop-types'

import HeaderActionBarTemplate from '../templates/HeaderActionBarTemplate'


// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeUser } from '../actions/loggedUserActions'


class HeaderActionBar extends Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
        username: PropTypes.string.isRequired
    }


    handleLogoutOnClik = () => {
        this.props.logout()
        this.props.history.push("/login")
    }

    render() {
        return (
            HeaderActionBarTemplate(this.props.username, this.handleLogoutOnClik)
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
