import {
    ADD_POSTS
} from '../actions/postsActions'


const initPosts = []


export const posts = (state = initPosts, action) => {
    switch (action.type) {
        case ADD_POSTS:
            return action.posts
        
        default:
            return state
    }
}
