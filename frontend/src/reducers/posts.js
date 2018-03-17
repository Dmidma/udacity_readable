import {
    ADD_POSTS,
    UPVOTE_POST,
    DOWNVOTE_POST
} from '../actions/postsActions'



/**
 * id: is a map by id of the posts
 * ids: is an array of the available posts' id
 */
const initPosts = {
    id: {},
    ids: []
}


export const posts = (state = initPosts, action) => {
    switch (action.type) {
        case ADD_POSTS:
            let newState = {...state}
            let idsSet = new Set(newState.ids)
            action.posts.forEach(post => {
                newState.id[post.id] = post
                idsSet.add(post.id)
            })
            newState.ids = [...idsSet]
            return newState        
        case UPVOTE_POST:
           let upState = {...state}

            upState.id[action.id].voteScore += 1

            return upState
        default:
            return state
    }
}
