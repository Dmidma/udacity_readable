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

    state = {
        isOpen: false
    }


    handleLogoutOnClik = () => {
        this.props.logout()
        this.props.history.push("/login")
    }

    handleCreatePostOnClick = () => {
        console.log("click!")
        this.setState((oldState) => ({ isOpen: !oldState.isOpen }))
    }

    handleCloseModel = () => { this.setState({ isOpen: false }) }

    render() {
        return (
            HeaderActionBarTemplate(
                this.props.username, 
                this.handleLogoutOnClik,
                this.handleCreatePostOnClick,
                this.state.isOpen,
                this.handleCloseModel)
        )
    }
}

function mapStateToProps({ loggedUser }) {
    return {
        username: loggedUser.name
    }
}


function mapDispatchToProps (dispatch) {
    return {
        logout: () => dispatch(removeUser())
    }
}


// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderActionBar))
export default connect(mapStateToProps, mapDispatchToProps)(HeaderActionBar)
