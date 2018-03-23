import { Component } from 'react'
import serializeForm from 'form-serialize'

import CommentsSectionTemplate from '../templates/CommentsSectionTemplate'
import PropTypes from 'prop-types'

import { 
    getCommentsOfPost, 
    addCommentToPost,
    upVoteComment,
    downVoteComment,
    deleteComment,
    updateDetailsOfComment
} from '../utils/api'

import { connect } from 'react-redux'

class CommentsSection extends Component {

    static propTypes = {
        postId: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }

    state = {
        comments: {
            ids: []
        }
    }

    updateStateAfterVote = (comment) => {
        this.setState((oldState) => 
            ({ 
                comments: { 
                ...oldState.comments, 
                [comment.id]: comment }
            })
        )
    }

    handleUpVoteComment = (id) => () => {
        upVoteComment(id)
            .then(comment => this.updateStateAfterVote(comment))
    }

    handleDownVoteComment = (id) => () => {
        downVoteComment(id)
            .then(comment => this.updateStateAfterVote(comment))
    }

    fetchCommentsPost = () => {
        getCommentsOfPost(this.props.postId)
            .then (comments => {
                let currentComments = {}
                let commentsIds = new Set()
                comments.forEach(comment => {
                    currentComments[comment.id] = comment
                    commentsIds.add(comment.id)
                })
                currentComments["ids"] = [...commentsIds]
                this.setState({ comments: currentComments })
            })
    }


    handleEditComment = (id) => () => {
        deleteComment(id)
            .then(data => {
                let currentIds = this.state.comments.ids
                currentIds.splice(currentIds.indexOf(id), 1)
                let currentComments = this.state.comments
                delete currentComments[id]
                this.setState({ comments: { ...currentComments, ids: currentIds } })
            })
    }

    handleDeleteComment = (id) => () => {
        console.log("FIXME", id)
    }

    componentDidMount() {
        this.fetchCommentsPost()
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        const { postId, username } = this.props
        e.target.comment.value = ""
        addCommentToPost(postId, values.comment, username)
            .then(comment => {
                let currentComments = this.state.comments
                currentComments.ids.unshift(comment.id)
                currentComments[comment.id] = comment
                this.setState({ comments: currentComments })
            })
    }

    render() {
        return (
            CommentsSectionTemplate(this.handleFormSubmit, this.state.comments,
                this.handleUpVoteComment.bind(this), this.handleDownVoteComment.bind(this),
                this.handleEditComment.bind(this), this.handleDeleteComment.bind(this)
            )
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
        // propsName: () => dispatch(actionCreator())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentsSection)
