import {GET_POSTS} from '../types'

const initialState = {
    posts:[],
    loading:true
}
// eslint-disable-next-line
export default function(state = initialState, action){

    switch(action.type){

        case GET_POSTS:
        return {
            ...state,
            posts:action.payload,


        }
        default: return state
    }

}