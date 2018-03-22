import { Component } from 'react'
import serializeForm from 'form-serialize'

import CommentsSectionTemplate from '../templates/CommentsSectionTemplate'
import PropTypes from 'prop-types'

import { getCommentsOfPost } from '../utils/api'

class CommentsSection extends Component {

    static propTypes = {
        postId: PropTypes.string.isRequired
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
        console.log(values)
    }

    render() {
        return (
            CommentsSectionTemplate(this.handleFormSubmit)
        )
    }
}

export default CommentsSection
