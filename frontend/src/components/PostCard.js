import { Component } from 'react'

import PostCardTemplate from '../templates/PostCardTemplate'

import { connect } from 'react-redux'
import { upVotePost, downVotePost, deletePost } from '../actions/postsActions'
import PropTypes from 'prop-types'


class PostCard extends Component {

    static propTypes = {
        username: PropTypes.string.isRequired,
        post: PropTypes.object.isRequired
    }
    
    state = {
        isPostedByLoggedUser: false
    }


    handleUpVoteOnClick = () => {
        this.props.upVotePost(this.props.postId)
    }

    handleDownVoteOnClick = () => {
        this.props.downVotePost(this.props.postId)
    }

    confirmDelete = () => {
        this.props.deletePost(this.props.post.id)
    }

    componentDidMount() {
        const { username, post } = this.props
        if (post.author === username) {
            this.setState({ isPostedByLoggedUser: true })
        }
    }

    render() {
        return (
            PostCardTemplate(
                this.props.post,
                this.handleUpVoteOnClick.bind(this),
                this.handleDownVoteOnClick.bind(this),
                this.state.isPostedByLoggedUser,
                this.confirmDelete.bind(this)
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
        deletePost: (postId) => dispatch(deletePost(postId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostCard)
