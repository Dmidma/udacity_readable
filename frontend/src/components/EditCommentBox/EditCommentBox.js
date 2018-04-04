import serializeForm from 'form-serialize'

import EditCommentBoxTemplate from './EditCommentBoxTemplate'
import PropTypes from 'prop-types'

const EditCommentBox = ({
    comment,
    isDialogOpen,
    closeDialog,
    saveEdit
}) => {
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        saveEdit(values.comment)
    }

    return (
        EditCommentBoxTemplate(handleFormSubmit, comment, isDialogOpen, closeDialog)
    )
}

EditCommentBox.propTypes = {
    comment: PropTypes.string.isRequired,
    isDialogOpen: PropTypes.bool.isRequired,
    closeDialog: PropTypes.func.isRequired,
    saveEdit: PropTypes.func.isRequired
}

export default EditCommentBox
