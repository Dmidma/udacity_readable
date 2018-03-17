import { Component } from 'react'

import PostCardTemplate from '../templates/PostCardTemplate'


// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { upVotePost, downVotePost } from '../actions/postsActions'


class PostCard extends Component {

    handleUpVoteOnClick = () => {
        this.props.upVotePost(this.props.post.id)
        this.setState({})
    }

    handleDownVoteOnClick = () => {
        this.props.downVotePost(this.props.post.id)
        this.setState({})
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



function mapDispatchToProps (dispatch) {
    return {
        upVotePost: (id) => dispatch(upVotePost(id)),
        downVotePost: (id) => dispatch(downVotePost(id))
    }
}


export default connect(null, mapDispatchToProps)(PostCard)
