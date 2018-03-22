import { Component } from 'react'

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
