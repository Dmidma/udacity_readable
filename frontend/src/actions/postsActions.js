export const ADD_POSTS = 'ADD_POSTS'


// posts is an array
export const addPosts = (posts) => {
    return {
        type: ADD_POSTS,
        posts
    }
}
