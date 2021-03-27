const initialState = {
    posts:[],
    loading:true
}// eslint-disable-next-line
export default function(state = initialState, action){
    // eslint-disable-next-line
    switch(action.type){
        case 'GET_SINGLE_POST':
            return {
                ...state,
                posts:action.payload,
            }
        case 'CREATE_COMMENTS':
            return {
                ...state,
                posts:action.payload,
                }
        default: return state
    }
}