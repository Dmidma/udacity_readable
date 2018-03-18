import { Component } from 'react'

import APostTemplate from '../templates/APostTemplate'

import { getPostById } from '../utils/api'



class APost extends Component {

    state = {
        post: {}
    }


    componentDidMount() {
        
        getPostById(this.props.match.params.post_id).then(post => {
            if (post.category !== this.props.match.params.category) {
                this.props.history.replace("/pagenotfound")
            } else {
                this.setState({ post })
            }

        })
    }




    render() {
        return (
            APostTemplate(this.props.match.params.category, this.props.match.params.post_id)

        )
    }
}

export default APost
