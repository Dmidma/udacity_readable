import { Component } from 'react'

import UpdatePostBoxTemplate from '../templates/UpdatePostBoxTemplate'
import PropTypes from 'prop-types'

class UpdatePostBox extends Component {

    static propTypes = {
        postId: PropTypes.string.isRequired
    }
    
    

    handleEdit = () => {
        console.log("click edit")
    }

    handleDelete = () => {
        console.log("click delete")
    }

    render() {
        return (
            UpdatePostBoxTemplate(this.handleEdit, this.handleDelete)
        )
    }
}

export default UpdatePostBox
