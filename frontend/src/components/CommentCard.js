import { Component } from 'react'

// FIXME: You may need to check this path
import CommentCardTemplate from '../templates/CommentCardTemplate'
import PropTypes from 'prop-types'

class CommentCard extends Component {

    static propTypes = {
        comment: PropTypes.object.isRequired
    }



    render() {
        return (
            CommentCardTemplate(this.props.comment)
        )
    }
}

export default CommentCard
