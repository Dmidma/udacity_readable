import React from 'react'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import HeaderActionBar from '../components/HeaderActionBar'
import UpdatePostBox from '../components/UpdatePostBox'
import CommentsSection from '../components/CommentsSection'

const APostTemplate = (isPostedByLoggedUser, post, 
    confirmDelete, confirmEdit) => (
    <div>
        <HeaderActionBar page={`/c/${post.category}`} />
        <Card className="post-details">
            <CardTitle 
                title={post.title} 
                subtitle={`Posted By ${post.author} on /c/${post.category}`} />
            <CardText>
                <p className="post-content">{post.body}</p>

                { isPostedByLoggedUser &&
                    <UpdatePostBox 
                        postId={post.id} 
                        isComment={false}
                        postTitle={post.title} 
                        confirmDelete={confirmDelete}
                        confirmEdit={confirmEdit} />
                }

            </CardText>
        </Card>
        <CommentsSection postId={post.id}  />
    </div>
)


export default APostTemplate
