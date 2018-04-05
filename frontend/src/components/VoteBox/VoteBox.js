import { Component } from 'react'

import VoteBoxTemplate from './VoteBoxTemplate'
import PropTypes from 'prop-types'


import { connect } from 'react-redux'
import { 
    upVotePost, 
    downVotePost, 
} from '../../actions/postsActions'

class VoteBox extends Component {

    static propTypes = {
        postId: PropTypes.string.isRequired,
        voteScore: PropTypes.number.isRequired,
        updateVote: PropTypes.func
    }

    handleUpVoteOnClick = () => {
        this.props.upVotePost()
        if (this.props.updateVote) {
            this.props.updateVote(this.props.voteScore + 1)
        }
    }
    handleDownVoteOnClick = () => {
        this.props.downVotePost()
        if (this.props.updateVote) {
            this.props.updateVote(this.props.voteScore - 1)
        }
    }

    render() {
        return (
            VoteBoxTemplate(
                this.handleUpVoteOnClick, 
                this.handleDownVoteOnClick, 
                this.props.voteScore
            )
        )
    }
}


function mapDispatchToProps (dispatch, ownProps) {
    return {
        upVotePost: () => dispatch(upVotePost(ownProps.postId)),
        downVotePost: () => dispatch(downVotePost(ownProps.postId))
    }
}


export default connect(null, mapDispatchToProps)(VoteBox)
