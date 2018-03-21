import React from 'react'

import { Link } from 'react-router-dom'

import FontIcon from 'material-ui/FontIcon'
import { blue500 } from 'material-ui/styles/colors'




const PostCardTemplate = (post, handleUpVote, handleDownVote, isPostedByLoggedUser) => {
    

    const currentDate = new Date(post.timestamp)
    const postDate = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`

    const postUrl = `/c/${post.category}/${post.id}`

    return (

      <div className="post-box">
        <div>
            <FontIcon
                className="material-icons"
                hoverColor={blue500} 
                onClick={handleUpVote}
            >
                    thumb_up
            </FontIcon>
            <h3>{post.voteScore}</h3>
            <FontIcon
                className="material-icons"
                hoverColor={blue500} 
                onClick={handleDownVote}
            >
                    thumb_down
            </FontIcon>
        </div>
        <div className="content-section">
        <Link className="post-title" to={postUrl} >
            {post.title}
        </Link>
        <p>
            Posted on {postDate} by {post.author} to {post.category}
        </p>

        <Link to={{
            pathname: postUrl,
            hash: '#comments'
        }} > {post.commentCount} Comments </Link>
        {isPostedByLoggedUser &&
            <div className="update-section">

            <FontIcon
                className="material-icons"
                hoverColor={blue500} 
            >
                    mode_edit
            </FontIcon>

            <FontIcon
                className="material-icons"
                hoverColor={blue500} 
            >
                    delete
            </FontIcon>
            </div>
        }
        </div>
      </div>
    )
}



export default PostCardTemplate
