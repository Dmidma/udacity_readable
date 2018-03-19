import { Component } from 'react'
import serializeForm from 'form-serialize'

import CreatePostTemplate from '../templates/CreatePostTemplate'

class CreatePost extends Component {

    handleFormSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        console.log(values)
    }

    render() {
        return (
            CreatePostTemplate(this.handleFormSubmit)
        )
    }
}

export default CreatePost
