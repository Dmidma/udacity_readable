// FIXME: Maybe the path is not well set
import {
    ACTION_NAME
} from '../actions'

const initcomments = {}


export const comments = (state = initcomments, action) => {
    switch (action.type) {
        case ACTION_NAME:
            // operations
            return {
                ...state
            }
        default:
            return state
    }
}
