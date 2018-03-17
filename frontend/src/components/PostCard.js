import { Component } from 'react'

import PostCardTemplate from '../templates/PostCardTemplate'


class PostCard extends Component {
    handleUpVoteOnClick = () => {
        console.log(`UpVote post(${this.props.post.id})`)
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

export default PostCard
