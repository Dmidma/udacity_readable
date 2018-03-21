import { Component } from 'react'
import PropTypes from 'prop-types'

import HeaderActionBarTemplate from '../templates/HeaderActionBarTemplate'


import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeUser } from '../actions/loggedUserActions'


class HeaderActionBar extends Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
        username: PropTypes.string.isRequired,
        logout: PropTypes.func.isRequired
    }

    state = {
        isPostDialogOpen: false,
        isDrawerOpen: false
    }

    openPostDialog = () => this.setState({ isPostDialogOpen: true })
    closePostDialog = () => this.setState({ isPostDialogOpen: false })

    openDrawer = () => this.setState({ isDrawerOpen: true })
    closeDrawer = () => this.setState({ isDrawerOpen: false })


    handleLogoutOnClik = () => {
        this.props.logout()
        this.props.history.push("/login")
    }

    render() {
        return (
            HeaderActionBarTemplate(
                this.props.username, this.handleLogoutOnClik,
                this.state.isPostDialogOpen, this.openPostDialog, this.closePostDialog,
                this.state.isDrawerOpen, this.openDrawer, this.closeDrawer)
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderActionBar))
