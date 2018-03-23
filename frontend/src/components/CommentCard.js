import { Component } from 'react'

import CommentCardTemplate from '../templates/CommentCardTemplate'
import PropTypes from 'prop-types'

class CommentCard extends Component {

    static propTypes = {
        comment: PropTypes.object.isRequired,
        upVoteComment: PropTypes.func.isRequired,
        downVoteComment: PropTypes.func.isRequired,
        editComment: PropTypes.func.isRequired,
        deleteComment: PropTypes.func.isRequired
    }



    render() {
        const { 
            upVoteComment,
            downVoteComment, 
            editComment, 
            deleteComment 
        } = this.props
        return (
            CommentCardTemplate(this.props.comment,
                upVoteComment, downVoteComment,
                editComment, deleteComment
            )
        )
    }
}

export default CommentCard
