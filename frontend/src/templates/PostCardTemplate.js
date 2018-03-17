import React from 'react'
import {CardTitle} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon'
import { red500, greenA200 } from 'material-ui/styles/colors'




const PostCardTemplate = (post, handleUpVote, handleDownVote) => {
    

    const currentDate = new Date(post.timestamp)
    const postDate = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`


    return (

      <div className="post-box">
        <div>
            <FontIcon
                className="material-icons"
                color={red500}
                hoverColor={greenA200} 
                onClick={handleUpVote}
            >
                    thumb_up
            </FontIcon>
            <h3>{post.voteScore}</h3>
            <FontIcon
                className="material-icons"
                color={red500}
                hoverColor={greenA200} 
                onClick={handleDownVote}
            >
                    thumb_down
            </FontIcon>
        </div>
        <div className="content-section">
        <CardTitle 
            title={post.title} />
        <p>
            Posted on {postDate} by {post.author} to {post.category}
        </p>

            <a href="/love"> {post.commentCount} Comments </a>
        </div>
      </div>
    )
}



export default PostCardTemplate
