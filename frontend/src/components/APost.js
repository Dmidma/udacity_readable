import { Component } from 'react'

// FIXME: You may need to check this path
import APostTemplate from '../templates/APostTemplate'

class APost extends Component {
    render() {
        return (
            APostTemplate(this.props.match.params.category, this.props.match.params.post_id)

        )
    }
}

export default APost
