import { combineReducers } from 'redux'

import { loggedUser } from './loggedUser'
import { posts } from './posts'

export default combineReducers({
    loggedUser,
    posts
})
