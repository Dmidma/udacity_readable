import {
    ADD_POSTS,
    UPVOTE_POST,
    DOWNVOTE_POST,
    ADD_NEW_POST,
    SET_SORT
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

            sortPosts(newState, sortArray, state.sort)
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
        case SET_SORT:
            const sortMethods = new Set(["best", "worst", "oldest", "newest"])
            let defaultSort = "best"
            if (sortMethods.has(action.sort))
                defaultSort = action.sort 
            return {
                ...state,
                sort: defaultSort
            }
        default:
            return state
    }
}

const sortPosts = (posts ,ids, sort) => {
    let sortKey = "voteScore"
    let order = 1
    if (sort === "oldest" || sort === "newest") sortKey = "timestamp"
    if (sort === "oldest" || sort === "worst") order *= -1

    ids.sort((id1, id2) => {
        return (posts[id1][sortKey] > posts[id2][sortKey])? -1 * order: order
    })
}
