import {
    upVotePost as _upVotePost,
    downVotePost as _downVotePost,
} from '../utils/api'




export const ADD_POSTS = 'ADD_POSTS'
export const UPVOTE_POST = 'UPVOTE_POST'
export const DOWNVOTE_POST = 'DOWNVOTE_POST'



// posts is an array
export const addPosts = (posts) => ({ type: ADD_POSTS, posts })




export const upVotePost = (id) => (dispatch) => {
    _upVotePost(id)
        .then(data => dispatch(upVotePostInStore(id)))
}

export const downVotePost = (id) => (dispatch) => {
    _downVotePost(id)
        .then(data => dispatch(downVotePostInStore(id)))
}

const upVotePostInStore = (id) => ({ type: UPVOTE_POST, id })
const downVotePostInStore = (id) => ({ type: DOWNVOTE_POST, id })
