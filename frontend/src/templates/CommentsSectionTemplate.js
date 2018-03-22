import React from 'react'
import { Card } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'



import FontIcon from 'material-ui/FontIcon'
import { blue500 } from 'material-ui/styles/colors'
import UpdatePostBox from '../components/UpdatePostBox'

const CommentsSectionTemplate = (handleFormSubmit, comments) => (
    <div>

       <div> 
        Nbr commments
        </div>
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

    {
        comments.ids.map(id => (

            <div key={id} className="comment-box">
                <div>
                <FontIcon
                className="material-icons"
                hoverColor={blue500} 
                >
                thumb_up
                </FontIcon>
                <h3>{comments[id].voteScore}</h3>
                <FontIcon
                className="material-icons"
                hoverColor={blue500} 
                >
                thumb_down
                </FontIcon>
                </div>
                <div className="content-section">
                <p>
                    {comments[id].body}
                </p>

                </div>
            </div>

        ))
    }
    </div>
)


export default CommentsSectionTemplate
