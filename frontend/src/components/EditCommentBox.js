import { Component } from 'react'
import serializeForm from 'form-serialize'

// FIXME: You may need to check this path
import EditCommentBoxTemplate from '../templates/EditCommentBoxTemplate'
import PropTypes from 'prop-types'

class EditCommentBox extends Component {

    static propTypes = {
        // prop: PropTypes.object.isRequired
    }


    handleFormSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        console.log(values)
    }

    render() {
        return (
            EditCommentBoxTemplate(this.handleFormSubmit)
        )
    }
}

export default EditCommentBox
