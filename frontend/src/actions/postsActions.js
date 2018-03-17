export const ADD_POSTS = 'ADD_POSTS'
export const UPVOTE_POST = 'UPVOTE_POST'
export const DOWNVOTE_POST = 'DOWNVOTE_POST'



// posts is an array
export const addPosts = (posts) => {
    return {
        type: ADD_POSTS,
        posts
    }
}



export const upVotePost = (id) => {
    return {
        type: UPVOTE_POST,
        id
    }
}


export const downVotePost = (id) => {
    return {
        type: DOWNVOTE_POST,
        id
    }
}
