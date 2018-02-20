import '../extensions/setPrototypeExtending'
import {
    getCategories,
    getPosts,
    getPostsByCategory,
    getPostById,
    getCommentById,
    getCommentsOfPost,
    voteToPost
} from './api'
import 'whatwg-fetch'
import 'jest-localstorage-mock';


test('Category Structure Test', () => {
    const categoryKeys = new Set(["name", "path"])
    return getCategories().then(data => {
        data.forEach(category => {
            const currentCategoryKeys = new Set(Object.keys(category))
            expect(currentCategoryKeys.equals(categoryKeys)).toBeTruthy() 
        })
    });
});


test('Posts Structure Test', () => {
    const postKeys = new Set(["id", "timestamp", "title", "body", "author", "category", "voteScore", "deleted", "commentCount"])
    return getPosts().then(data => {
        data.forEach(post => {
            const currentPostKeys = new Set(Object.keys(post))
            expect(currentPostKeys.equals(postKeys)).toBeTruthy()
        })
    })
})


test('Get Posts of a "react" Category', () => {
    const postId = '8xf0y6ziyjabvozdd253nd'
    const category = 'react'

    return getPostsByCategory(category).then(data => {
        data.forEach(post => {
            expect(post.category).toBe(category)
        })
    
        expect(data.findIndex(post => post.id === postId))
            .toBeGreaterThanOrEqual(0)
        
    })
})

test('Get Posts of a non existing Category', () => {
    const unexistingCategory = Math.random().toString(10)
    return getPostsByCategory(unexistingCategory).then(data => {
        expect(data.length).toEqual(0)
    })
})


test("Get Post by Id", () => {
    const postId = '8xf0y6ziyjabvozdd253nd'
    return getPostById(postId).then(data => {
        expect(data.id).toBe(postId)
    })
})


test("Get unexisting Post", () => {
    const postId = Math.random().toString(10)
    return getPostById(postId).then(data => {
        expect(data).toMatchObject({ 'error': 'There was an error.' })
    })
})


test("Get Comment by Id", () => {
    const commentId = '894tuq4ut84ut8v4t8wun89g'
    const commentParentId = "8xf0y6ziyjabvozdd253nd"
    return getCommentById(commentId).then(data => {
        expect(data.id).toBe(commentId)
        expect(data.parentId).toBe(commentParentId)
    })
})

test("Get unexsiting Comment", () => {
    const unexistingId = Math.random().toString(10)
    return getCommentById(unexistingId).then(data => {
        expect(data).toMatchObject({ 'error': 'There was an error.' })
    })
})


test("Get comments of a Post", () => {
    const postId = '8xf0y6ziyjabvozdd253nd'
    const commentsIds = new Set(["8tu4bsun805n8un48ve89", "894tuq4ut84ut8v4t8wun89g"])
    return getCommentsOfPost(postId).then(data => {
        data.forEach(comment => expect(comment.parentId).toBe(postId))
        const currentCommentsIds = new Set(data.map(comment => comment.id))
        expect(commentsIds.isASubsetOf(currentCommentsIds)).toBeTruthy()
    })
})


test("Get comments of unexisting Post", () => {
    const postId = Math.random().toString(10)
    return getCommentsOfPost(postId).then(data => {
        expect(data.length).toEqual(0)
    })
})


test("Voting to a post", () => {
    const postId = '8xf0y6ziyjabvozdd253nd'
    const currentVote = 6
    return voteToPost(postId, "upVote").then(data => {
        expect(data.voteScore).toEqual(currentVote + 1)
    })
})


test("Voting with an unvalid option", () => {
    const postId = '8xf0y6ziyjabvozdd253nd'
    const unvalidOption = Math.random().toString(10)
    return voteToPost(postId, unvalidOption).then(data => {
        expect(data).toMatchObject({ 'error': 'There was an error.' })
    })
})
