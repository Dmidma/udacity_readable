import React from 'react'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import HeaderActionBar from '../components/HeaderActionBar'

const APostTemplate = (post) => (
    <div>
    <HeaderActionBar page={`/c/${post.category}`} />
    <Card>
        <CardTitle 
            title={post.title} 
            subtitle={`Posted By ${post.author} on /c/${post.category}`} />
        <CardText>
            {post.body}
        </CardText>
    </Card>
    </div>
)


export default APostTemplate
