import React from 'react'


const CreatePostTemplate = (handleFormSubmit) => (
    <div>
        This is CreatePost component
        <form onSubmit={handleFormSubmit} >
            <input name="input1" type="text" />
            <input name="input2" type="text" />
            <input name="submit" type="submit" />
        </form>
    </div>
)


export default CreatePostTemplate
