import React from 'react'
import { Card } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

const CommentsSectionTemplate = (handleFormSubmit) => (
    <div>

       <div> 
        Nbr commments
        </div>
    <Card className="comment-box">
        <form onSubmit={handleFormSubmit} >
            <TextField 
                hintText="Comment here if you want =D"
                floatingLabelText="Comment"
                name="Comment" 
                fullWidth={true}
                multiLine={true}
                rows={2}/>
            <br/>
            <FlatButton type="submit" label="Save" />
        </form>
    </Card>
    </div>
)


export default CommentsSectionTemplate
