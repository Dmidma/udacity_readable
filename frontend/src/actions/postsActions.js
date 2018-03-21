import {
    upVotePost as _upVotePost,
    downVotePost as _downVotePost,
    addAPost as _addAPost
} from '../utils/api'




export const ADD_POSTS = 'ADD_POSTS'
export const UPVOTE_POST = 'UPVOTE_POST'
export const DOWNVOTE_POST = 'DOWNVOTE_POST'
export const ADD_NEW_POST = 'ADD_NEW_POST'
export const SET_SORT = 'SET_SORT'


// posts is an array
export const addPosts = (posts) => ({ type: ADD_POSTS, posts })


const addNewPost = (post) => ({ type: ADD_NEW_POST, post })

export const createPost = (title, body, author, category) => (dispatch) => {
    _addAPost(title, body, author, category)
        .then(post => dispatch(addNewPost(post)))
}



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


export const setSort = (sort) => ({ type: SET_SORT, sort })
