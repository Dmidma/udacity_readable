import React from 'react'

import { Link } from 'react-router-dom'

import UpdatePostBox from '../UpdatePostBox/'
import Dialog from 'material-ui/Dialog'
import CreatePost from '../CreatePost/'
import VoteBox from '../VoteBox'


const PostCardTemplate = (
    post, isPostedByLoggedUser,
    confirmDelete, confirmEdit,
    isEditDialogOpen, closeEditDialog, 
    submitPostEdit, editValues) => {
    

    const currentDate = new Date(post.timestamp)
    const postDate = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`

    const postUrl = `/c/${post.category}/${post.id}`

    return (

      <div className="post-box">
        <VoteBox postId={post.id} voteScore={post.voteScore} />
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
            <UpdatePostBox 
                isComment={false}
                postTitle={post.title} 
                confirmDelete={confirmDelete}
                confirmEdit={confirmEdit}
            />
        }
        </div>

        <Dialog
            className="long-dialog"
            title="Edit Post"
            open={isEditDialogOpen} 
            onRequestClose={closeEditDialog} > 
            <CreatePost 
                editValues={editValues}
                closeModel={closeEditDialog} 
                isEdit={true}
                handleSubmit={submitPostEdit} />
        </Dialog>
      </div>
    )
}



export default PostCardTemplate
