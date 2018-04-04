import CommentCardTemplate from './CommentCardTemplate'
import PropTypes from 'prop-types'

const CommentCard = ({
    upVoteComment,
    downVoteComment,
    editComment,
    deleteComment,
    comment,
    isOfLoggedUser
}) => (
    CommentCardTemplate(
        comment,
        upVoteComment, downVoteComment,
        editComment, deleteComment,
        isOfLoggedUser
    )
)

CommentCard.propTypes = {
    comment: PropTypes.object.isRequired,
    upVoteComment: PropTypes.func.isRequired,
    downVoteComment: PropTypes.func.isRequired,
    editComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    isOfLoggedUser: PropTypes.bool.isRequired
}

export default CommentCard
