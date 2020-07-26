import { FETCH_POSTS, NEW_POST } from './types';

export function fetchPosts(){
    return function( dispatch ){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then( res => res.json())
            .then( posts => dispatch( {
                type: FETCH_POSTS,
                payload: posts
            } ))
    }
}

export function createPost(data){
    return function ( dispatch ){
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then( res => res.json())
        .then( post => dispatch( {
                type: NEW_POST,
                payload: post
        } ))
    }
}