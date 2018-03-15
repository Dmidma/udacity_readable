import {
    ADD_USER,
    REMOVE_USER
} from '../actions/loggedUserActions'


const initLoggedUser = {
    name: null
}

export const loggedUser = (state = initLoggedUser, action) => {
    switch (action.type) {
        case ADD_USER:
            return { name: action.name }
        break;
        case REMOVE_USER:
            return { name: null }
        break;
        default: 
            return state
    }
}
