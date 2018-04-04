import React from 'react'

import FontIcon from 'material-ui/FontIcon'
import { blue500 } from 'material-ui/styles/colors'

const VoteBoxTemplate = (handleUpVote, handleDownVote, voteScore) => (
    <div>
        <FontIcon
            className="material-icons"
            hoverColor={blue500} 
            onClick={handleUpVote}
        >
                thumb_up
        </FontIcon>
        <h3>{voteScore}</h3>
        <FontIcon
            className="material-icons"
            hoverColor={blue500} 
            onClick={handleDownVote}
        >
                thumb_down
        </FontIcon>
    </div>
)


export default VoteBoxTemplate
