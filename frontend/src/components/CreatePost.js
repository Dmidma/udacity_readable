import { Component } from 'react'
import PropTypes from 'prop-types'
import serializeForm from 'form-serialize'

import CreatePostTemplate from '../templates/CreatePostTemplate'


// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createPost as actionCreatePost } from '../actions/postsActions'


class CreatePost extends Component {

    static propTypes = {
        closeModel: PropTypes.func.isRequired,
        username: PropTypes.string.isRequired,
        categories: PropTypes.array.isRequired
    }

    state = {
        isAvailable: true
    }


    handleFormSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })

        if (this.props.categories.find(category => category === values.category) === undefined) {
            this.setState({ isAvailable: false })
            return 
        } else {
            this.setState({ isAvailable: true })
        }
        
        this.props.persistPost(
            values.title,
            values.content,
            this.props.username,
            values.category
        )
        this.props.closeModel()
    }

    render() {
        return (
            CreatePostTemplate(
                this.handleFormSubmit.bind(this), 
                this.props.categories, 
                this.state.isAvailable)
        )
    }
}

function mapStateToProps ({ loggedUser, categories }) {
    return {
        username: loggedUser.name,
        categories: categories.ids
    }
}

function mapDispatchToProps (dispatch) {
    return {
        persistPost: (title, body, author, category) => dispatch(actionCreatePost(title, body, author, category))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
