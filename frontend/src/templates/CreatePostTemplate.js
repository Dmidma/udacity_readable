import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'



const CreatePostTemplate = (handleFormSubmit) => (
    <div>
        <form className="max-width" onSubmit={handleFormSubmit} >
            <TextField 
                className="max-width"
                hintText="Title"
                floatingLabelText="Title"
                name="title" />
            <br/>
            <TextField 
                className="max-width"
                hintText="Content"
                floatingLabelText="Content"
                name="content" 
                multiLine={true}
                rows={4}/>
            <br/>
            <FlatButton className="center-form-button" type="submit" label="Create Post" />
        </form>
    </div>
)


export default CreatePostTemplate
