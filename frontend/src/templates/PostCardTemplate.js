import React from 'react'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon'
import { red500, greenA200 } from 'material-ui/styles/colors'

const PostCardTemplate = () => (



  <div className="same-box">
    <div className="inside-box">
        <FontIcon
            className="material-icons"
            color={red500}
            hoverColor={greenA200} >
                thumb_down
        </FontIcon>
        <h3>5</h3>
        <FontIcon
            className="material-icons"
            color={red500}
            hoverColor={greenA200} >
                thumb_up
        </FontIcon>
    </div>
    <div className="content-section">
    <CardTitle 
        title="Udacity is the best place to learn React" />
    <p>
        Posted on 05/02/2018 by thingtwo to react
    </p>

        <a href="/love"> 34 Comments </a>
    </div>
  </div>

)


export default PostCardTemplate
