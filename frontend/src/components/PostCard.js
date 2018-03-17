import { Component } from 'react'

import PostCardTemplate from '../templates/PostCardTemplate'


// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { upVotePost } from '../actions/postsActions'


class PostCard extends Component {
    handleUpVoteOnClick = () => {
        console.log(`UpVote post(${this.props.post.id})`)
        this.props.upVotePost(this.props.post.id)
    }

    handleDownVoteOnClick = () => {
        console.log(`DownVote post(${this.props.post.id})`)
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

function mapStateToProps ({ posts }) {
    return {
    }
}

function mapDispatchToProps (dispatch) {
    return {
        upVotePost: (id) => dispatch(upVotePost(id))
    }
}


// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostCard))
export default connect(null, mapDispatchToProps)(PostCard)
