import {GET_POSTS} from '../types'
import axios from 'axios'

export const getUsers = () => async dispatch => {


        const res = await axios.get(`http://localhost:3000/posts`)
        dispatch( {
            type:GET_POSTS,
            payload: res.data
        })



}