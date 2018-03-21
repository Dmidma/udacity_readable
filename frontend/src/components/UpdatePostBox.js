import { Component } from 'react'

import UpdatePostBoxTemplate from '../templates/UpdatePostBoxTemplate'
import PropTypes from 'prop-types'


// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postsActions'

class UpdatePostBox extends Component {

    static propTypes = {
        postId: PropTypes.string.isRequired,
        postTitle: PropTypes.string.isRequired
    }
    
    state = {
        isConfirmOpen: false,
        confirmMessage: '',
        action: 1 // 0: for editing, 1: for deleting
    }

    closeConfirmDialog = () => this.setState({ isConfirmOpen: false })
    openConfirmDialog = () => this.setState({ isConfirmOpen: true })

    setEditAsAction = () => this.setState({ action: 0})
    setDeleteAsAction = () => this.setState({ action: 1})

    handleEdit = () => {
        this.setConfirmMessage("edit")
        this.setEditAsAction()
        this.openConfirmDialog()
    }

    handleDelete = () => {
        this.setConfirmMessage("delete")
        this.setDeleteAsAction()
        this.openConfirmDialog()
    }

    handleAcceptAction = () => {
        switch (this.state.action) {
            case 0:
                console.log("Confirmed Editing")
            break;
            case 1:
                this.props.deletePost(this.props.postId)
            break;
            default:
        }
        this.closeConfirmDialog()
    }

    setConfirmMessage = (action) => this.setState({ confirmMessage: `Are you sure you to ${action} post: "${this.props.postTitle}"?` }) 

    render() {
        return (
            UpdatePostBoxTemplate(this.handleEdit, this.handleDelete, this.state.confirmMessage, this.state.isConfirmOpen, this.closeConfirmDialog, this.handleAcceptAction)
        )
    }
}

function mapStateToProps ({ posts }, ownProps) {
    return {
        postTitle: posts[ownProps.postId].title
    }
}

function mapDispatchToProps (dispatch) {
    return {
        deletePost: (postId) => dispatch(deletePost(postId))
    }
}


// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdatePostBox))
export default connect(mapStateToProps, mapDispatchToProps)(UpdatePostBox)
