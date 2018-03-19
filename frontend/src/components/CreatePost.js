import { Component } from 'react'
import PropTypes from 'prop-types'
import serializeForm from 'form-serialize'

import CreatePostTemplate from '../templates/CreatePostTemplate'

class CreatePost extends Component {

    static propTypes = {
        closeModel: PropTypes.func.isRequired
    }



    handleFormSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        console.log(values)
        // this allow to close model
        this.props.closeModel()
    }

    render() {
        return (
            CreatePostTemplate(this.handleFormSubmit)
        )
    }
}

export default CreatePost
