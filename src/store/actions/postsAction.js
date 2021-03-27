import {GET_POSTS} from '../types'
import axios from 'axios'

export const getPosts = () => async dispatch => {
    const res = await axios.get(`http://localhost:3000/posts`)
        dispatch({
            type:GET_POSTS,
            payload: res.data
        })
}

export const getSinglePosts = (id) => async dispatch => {
    const res = await axios.get(`http://localhost:3000/get/post?id=`+id)
    dispatch( {
        type:'GET_SINGLE_POST',
        payload: res.data
    })
}

export const deletePosts = (id) => async dispatch => {
    const res = await axios.delete(`http://localhost:3000/posts/`+id)
    dispatch({
        type:'DELETE_POSTS',
        payload: res.data
    })
}

export const createPosts = (content) => async dispatch => {
    const postContent = { content: content };
    await axios.post(`http://localhost:3000/posts`,postContent).then((res)=>{
        dispatch( {
            type:'CREATE_POSTS',
            payload: res.data
        })
    })
    .then(() => {
        window.location = "/home";
    })
}

export const updatePosts = (id,content) => async dispatch => {
    const postContent = { content: content };
    await axios.put(`http://localhost:3000/posts/`+id,postContent).then((res)=>{
        dispatch( {
            type:'UPDATE_POSTS',
            payload: res.data
        })
    })
}

export const createComments = (id,content) => async dispatch => {
    const postContent = { content: content,post_id:id };
    await axios.post(`http://localhost:3000/comments`,postContent).then((res)=>{
        dispatch( {
            type:'CREATE_COMMENTS',
            payload: res.data
        })
    })
    }

