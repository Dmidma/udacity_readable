import { Component } from 'react'

import APostTemplate from '../templates/APostTemplate'

import { getPostById } from '../utils/api'


import { connect } from 'react-redux'


import { deletePost, editPost } from '../actions/postsActions'

class APost extends Component {

    state = {
        post: {},
        isPostedByLoggedUser: false,
        isEditDialogOpen: false
    }

    closeEditDialog = () => this.setState({ isEditDialogOpen: false })
    openEditDialog = () => this.setState({ isEditDialogOpen: true })

    fetchPost = (postId) => {
        getPostById(postId).then(post => {
            if (post.author === this.props.username) {
                this.setState({ isPostedByLoggedUser: true })
            }
            if (post.category !== this.props.match.params.category) {
                this.props.history.replace("/pagenotfound")
            } else {
                this.setState({ post })
            }
        })
    }


    componentDidMount() {
        if (this.props.username === null) {
            this.props.history.push("/")
            return
        }
        this.fetchPost(this.props.match.params.post_id)
    }

    confirmDelete = () => {
        this.props.deletePost(this.state.post.id)
        this.props.history.push("/feed")
    }

    confirmEdit = () => {
        this.openEditDialog()
    }
 
    submitPostEdit = (title, body) => {
        this.props.updatePost(this.state.post.id, title, body)
        let oldPost = this.state.post;
        oldPost.title = title
        oldPost.body = body
        this.setState({ post: oldPost })
    }

    render() {
        const { post, isPostedByLoggedUser } = this.state
        if (post["id"] === undefined) return null
        return (
            APostTemplate(isPostedByLoggedUser, post, 
                this.confirmDelete.bind(this), this.confirmEdit.bind(this),
                this.state.isEditDialogOpen, this.closeEditDialog.bind(this),
                this.submitPostEdit.bind(this), {title: post.title, content: post.body})

        )
    }
}

function mapStateToProps ({ loggedUser }) {
    return {
        username: loggedUser.name
    }
}

function mapDispatchToProps (dispatch) {
    return {
        deletePost: (postId) => dispatch(deletePost(postId)),
        updatePost: (postId, title, body) => dispatch(editPost(postId, title, body))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(APost)
