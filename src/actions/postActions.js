import { FETCH_POSTS, NEW_POST } from './types';
import axios from 'axios';

// action for fetching existing posts - 

// export function fetchPosts() {
//     return function(dispatch) {
// in ES6 we'd write this stuff (above) like this (below)

export const fetchPosts = () => dispatch => {
    // this is where we create our fetch.. the one to be used in the post component
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts.data
        })
    );
}

// action for adding a new post
export const createPost = (postData) => dispatch => {
    // this is where we create our fetch.. the one to be used in the post component
    axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        headers: {
            'content-type': 'application/json'
        },
        data: JSON.stringify(postData)
    })
    .then(response => dispatch({
        type: NEW_POST,
        payload: response.data
    }))
}