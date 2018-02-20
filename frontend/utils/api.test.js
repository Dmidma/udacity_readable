import '../extensions/setPrototypeExtending'
import {
    getCategories,
    getPosts
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


