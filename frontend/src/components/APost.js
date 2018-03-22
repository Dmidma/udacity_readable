import { Component } from 'react'

import APostTemplate from '../templates/APostTemplate'

import { getPostById } from '../utils/api'


// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import { actionCreator } from '../actions'



class APost extends Component {

    state = {
        post: {},
        isPostedByLoggedUser: false
    }


    componentDidMount() {

        if (this.props.username === null) {
            this.props.history.push("/")
            return
        }
        

        getPostById(this.props.match.params.post_id).then(post => {
            if (post.author === this.props.username) {
                this.setState({ isPostedByLoggedUser: true })
            }
            if (post.category !== this.props.match.params.category) {
                this.props.history.replace("/pagenotfound")
            } else {
                this.setState({ post })
            }

        })
    }




    render() {
        return (
            APostTemplate(this.state.post)

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


// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(APost))
export default connect(mapStateToProps, mapDispatchToProps)(APost)
