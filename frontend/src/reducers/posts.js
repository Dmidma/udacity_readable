import {
    ADD_POSTS,
    UPVOTE_POST,
    DOWNVOTE_POST,
    ADD_NEW_POST
} from '../actions/postsActions'



/**
 * ids: is an array of the available posts' id
 */
const initPosts = {
    ids: []
}


export const posts = (state = initPosts, action) => {
    switch (action.type) {
        case ADD_POSTS:
            let newState = {...state}
            let idsSet = new Set(newState.ids)
            action.posts.forEach(post => {
                newState[post.id] = post
                idsSet.add(post.id)
            })
            newState.ids = [...idsSet]
            return newState        
        case UPVOTE_POST:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id], 
                    voteScore: state[action.id].voteScore + 1
                }
            }
        case DOWNVOTE_POST:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id], 
                    voteScore: state[action.id].voteScore - 1
                }
            }
        case ADD_NEW_POST:
            let newIds = state.ids;
            newIds.unshift(action.post.id)
            return {
                ...state,
                [action.post.id]: action.post,
                ids: [...newIds]
            }
        default:
            return state
    }
}
