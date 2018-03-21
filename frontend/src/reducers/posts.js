import {
    ADD_POSTS,
    UPVOTE_POST,
    DOWNVOTE_POST,
    ADD_NEW_POST
} from '../actions/postsActions'



/**
 * ids: is an array of the available posts' id
 * @sort: string to determine how posts are being sorted.
 *  best, worst, old, new
 */
const initPosts = {
    sort: "best",
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
            let sortArray = [...idsSet]
            sortArray.sort((id1, id2) => {
                if (newState[id1].voteScore > newState[id2].voteScore) return -1
                else if (newState[id1].voteScore < newState[id2].voteScore) return 1
                else return 0
            })
            newState.ids = [...sortArray]
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
