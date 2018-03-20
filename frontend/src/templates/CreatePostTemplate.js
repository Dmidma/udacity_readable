import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import AutoComplete from 'material-ui/AutoComplete'


const CreatePostTemplate = (handleFormSubmit, categories, isAvailable) => (
    <div>
        <form onSubmit={handleFormSubmit} >
            <TextField 
                hintText="Title"
                fullWidth={true}
                floatingLabelText="Title"
                name="title" />
            <br/>
            <TextField 
                hintText="Content"
                floatingLabelText="Content"
                name="content" 
                fullWidth={true}
                multiLine={true}
                rows={4}/>
            <br/>
    {
        !isAvailable &&

            (<AutoComplete
                hintText="Category"
                floatingLabelText="Category"
                name="category"
                errorText="Unavailable Category"
                dataSource={categories}
                />)
    }


    {
        isAvailable &&
            (
            <AutoComplete
                hintText="Category"
                floatingLabelText="Category"
                fullWidth={true}
                name="category"
                dataSource={categories}
                />)
    }
            <FlatButton className="center-form-button" type="submit" label="Create Post" />
        </form>
    </div>
)


export default CreatePostTemplate
