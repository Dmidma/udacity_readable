import { Component } from 'react'

import PostCardTemplate from './PostCardTemplate'

import { connect } from 'react-redux'
import { 
    upVotePost, 
    downVotePost, 
    deletePost,
    editPost
} from '../../actions/postsActions'
import PropTypes from 'prop-types'


class PostCard extends Component {

    static propTypes = {
        username: PropTypes.string.isRequired,
        post: PropTypes.object.isRequired
    }
    
    state = {
        isPostedByLoggedUser: false,
        isEditDialogOpen: false
    }

    componentDidMount() {
        const { username, post } = this.props
        if (post.author === username) {
            this.setState({ isPostedByLoggedUser: true })
        }
    }

    handleUpVoteOnClick = () => this.props.upVotePost(this.props.postId)
    handleDownVoteOnClick = () => this.props.downVotePost(this.props.postId)

    confirmDelete = () => {
        this.props.deletePost(this.props.post.id)
    }

    confirmEdit = () => {
        this.toggleEditDialog()
    }

    toggleEditDialog = () => this.setState((currentState) => ({ isEditDialogOpen: !currentState.isEditDialogOpen }))

    submitPostEdit = (title, body) => {
        this.props.updatePost(this.props.post.id, title, body)
    }

    render() {
        const { post } = this.props
        return (
            PostCardTemplate(
                post, this.state.isPostedByLoggedUser,
                this.handleUpVoteOnClick, this.handleDownVoteOnClick,
                this.confirmDelete, this.confirmEdit,
                this.state.isEditDialogOpen, this.toggleEditDialog,
                this.submitPostEdit, {title: post.title, content: post.body}
            )
        )
    }
}

function mapStateToProps ({ loggedUser, posts }, ownProps) {
    return {
        username: loggedUser.name,
        post: posts[ownProps.postId]
    }
}


function mapDispatchToProps (dispatch) {
    return {
        upVotePost: (id) => dispatch(upVotePost(id)),
        downVotePost: (id) => dispatch(downVotePost(id)),
        deletePost: (postId) => dispatch(deletePost(postId)),
        updatePost: (id, title, body) => dispatch(editPost(id, title, body))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostCard)
