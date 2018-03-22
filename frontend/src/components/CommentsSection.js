import { Component } from 'react'
import serializeForm from 'form-serialize'

import CommentsSectionTemplate from '../templates/CommentsSectionTemplate'
import PropTypes from 'prop-types'

import { getCommentsOfPost, addCommentToPost } from '../utils/api'

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
            CommentsSectionTemplate(this.handleFormSubmit, this.state.comments)
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
