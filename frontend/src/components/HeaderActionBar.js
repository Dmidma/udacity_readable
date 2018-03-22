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
        logout: PropTypes.func.isRequired,
        categories: PropTypes.array.isRequired,
        page: PropTypes.string.isRequired
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
   
    clickCategory = (category) => () => {
        if (category === "all") {
            this.props.history.push('/feed')
        } else {
            this.props.history.push(`/c/${category}`)
            window.location.reload()
        }
    }

    render() {
        const { username, page, categories } = this.props
        const { isPostDialogOpen, isDrawerOpen } = this.state
        let categoriesObj = categories.map(category => {
            return {
                category,
                isDisabled: page.split("/")[2] === category
            }
        })
        categoriesObj.unshift({ category: "all", isDisabled: page === "FeedPage" })
        return (
            HeaderActionBarTemplate(
                username, page, this.handleLogoutOnClik,
                isPostDialogOpen, this.openPostDialog, this.closePostDialog,
                isDrawerOpen, this.openDrawer, this.closeDrawer,
                categoriesObj, this.clickCategory.bind(this))
        )
    }
}

function mapStateToProps({ loggedUser, categories }) {
    return {
        username: loggedUser.name,
        categories: categories.ids
    }
}


function mapDispatchToProps (dispatch) {
    return {
        logout: () => dispatch(removeUser())
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderActionBar))
