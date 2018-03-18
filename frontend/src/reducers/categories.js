import {
    ADD_CATEGORIES
} from '../actions/categoriesActions'


const initCategories = []

export const categories = (state = initCategories, action) => {
    switch (action.type) {
        case ADD_CATEGORIES:
            return [...action.categories]
        default:
            return state
    }
}
