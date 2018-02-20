const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
    token =  Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}


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
