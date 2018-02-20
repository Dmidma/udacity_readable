const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
    token =  Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

/**
 * GET CALLS
 */

export const getCategories = () =>
    fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getPosts = () => 
    fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getPostsByCategory = (category) =>
    fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getPostById = (id) => 
    fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getCommentById = (id) =>
    fetch(`${api}/comments/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getCommentsOfPost = (postId) => 
    fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)


/**
 * POST CALLS
 */

const voteToPost = (id, option) => {
    if (option !== "upVote" && option !== "downVote") 
        return new Promise(resolve => resolve({ 'error': 'There was an error.' }))

    return fetch(`${api}/posts/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ option })
    })
    .then(res => res.json())
    .then(data => data)
}


export const upVotePost = (id) => voteToPost(id, "upVote")

export const downVotePost = (id) => voteToPost(id, "downVote")

