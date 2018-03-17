import { Component } from 'react'

import PostCardTemplate from '../templates/PostCardTemplate'


// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { upVotePost, downVotePost } from '../actions/postsActions'


class PostCard extends Component {

    handleUpVoteOnClick = () => {
        this.props.upVotePost(this.props.postId)
    }

    handleDownVoteOnClick = () => {
        this.props.downVotePost(this.props.postId)
    }

    render() {
        return (
            PostCardTemplate(
                this.props.post,
                this.handleUpVoteOnClick.bind(this),
                this.handleDownVoteOnClick.bind(this)
            )
        )
    }
}

function mapStateToProps ({ posts }, ownProps) {
    return {
        post: posts.id[ownProps.postId]
    }
}


function mapDispatchToProps (dispatch) {
    return {
        upVotePost: (id) => dispatch(upVotePost(id)),
        downVotePost: (id) => dispatch(downVotePost(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostCard)
