import { Component } from 'react'

import UpdatePostBoxTemplate from './UpdatePostBoxTemplate'
import PropTypes from 'prop-types'


class UpdatePostBox extends Component {

    static propTypes = {
        postTitle: PropTypes.string,
        confirmDelete: PropTypes.func.isRequired,
        confirmEdit: PropTypes.func.isRequired,
        isComment: PropTypes.bool.isRequired
    }
    
    state = {
        isConfirmOpen: false,
        confirmMessage: '',
        action: 1 // 0: for editing, 1: for deleting
    }

    toggleConfirmDialog = () => this.setState((currentState) => ({ isConfirmOpen: !currentState.isConfirmOpen }))

    setEditAsAction = () => this.setState({ action: 0})
    setDeleteAsAction = () => this.setState({ action: 1})

    handleEdit = () => {
        this.setConfirmMessage("edit")
        this.setEditAsAction()
        this.toggleConfirmDialog()
    }

    handleDelete = () => {
        this.setConfirmMessage("delete")
        this.setDeleteAsAction()
        this.toggleConfirmDialog()
    }

    handleAcceptAction = () => {
        switch (this.state.action) {
            case 0:
                this.props.confirmEdit()
            break;
            case 1:
                this.props.confirmDelete()
            break;
            default:
        }
        this.toggleConfirmDialog()
    }

    setConfirmMessage = (action) =>  {
        const { isComment, postTitle } = this.props
        let confirmMessage = `Are you sure to ${action} comment?`
        if (!isComment) {
            confirmMessage = `Are you sure you to ${action} post: "${postTitle}"?` 
        }
        this.setState({ confirmMessage }) 
    }
    

    render() {
        return (
            UpdatePostBoxTemplate(this.handleEdit, this.handleDelete, this.state.confirmMessage, this.state.isConfirmOpen, this.toggleConfirmDialog, this.handleAcceptAction)
        )
    }
}


export default UpdatePostBox
