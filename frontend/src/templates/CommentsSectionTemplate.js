import React from 'react'
import { Card } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'




import CommentCard from '../components/CommentCard'


const CommentsSectionTemplate = (handleFormSubmit, comments) => (
    <div>

    <Card className="submit-comment-box">
        <form onSubmit={handleFormSubmit} >
            <TextField 
                hintText="Comment here if you want =D"
                floatingLabelText="Comment"
                name="comment" 
                fullWidth={true}
                multiLine={true}
                rows={2}/>
            <br/>
            <FlatButton type="submit" label="Save" />
        </form>
    </Card>



    <div className="comment-count"> 
        {comments.ids.length} commments
    </div>

    {
        comments.ids.map(id => (<CommentCard key={id} comment={comments[id]} />))
    }
    </div>
)


export default CommentsSectionTemplate
