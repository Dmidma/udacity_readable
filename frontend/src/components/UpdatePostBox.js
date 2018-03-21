import { Component } from 'react'

import UpdatePostBoxTemplate from '../templates/UpdatePostBoxTemplate'
import PropTypes from 'prop-types'


// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import { actionCreator } from '../actions'

class UpdatePostBox extends Component {

    static propTypes = {
        postId: PropTypes.string.isRequired,
        postTitle: PropTypes.string.isRequired
    }
    
    state = {
        isConfirmOpen: false,
        confirmMessage: ''
    }

    closeConfirmDialog = () => this.setState({ isConfirmOpen: false })
    openConfirmDialog = () => this.setState({ isConfirmOpen: true })

    handleEdit = () => {
        this.setConfirmMessage("edit")
        this.openConfirmDialog()
    }

    handleDelete = () => {
        this.setConfirmMessage("delete")
        this.openConfirmDialog()
    }

    setConfirmMessage = (action) => this.setState({ confirmMessage: `Are you sure you to ${action} post: "${this.props.postTitle}"?` }) 

    render() {
        return (
            UpdatePostBoxTemplate(this.handleEdit, this.handleDelete, this.state.confirmMessage, this.state.isConfirmOpen, this.closeConfirmDialog)
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
        // propsName: () => dispatch(actionCreator())
    }
}


// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdatePostBox))
export default connect(mapStateToProps, mapDispatchToProps)(UpdatePostBox)
