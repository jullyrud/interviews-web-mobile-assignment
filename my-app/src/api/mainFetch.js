import axios from 'axios';


export const fethPosts = () => {
return axios.get(`https://jsonplaceholder.typicode.com/posts/`)
}

export const fethComments = () => {
return axios.get(`https://jsonplaceholder.typicode.com/comments/`)
}

export const fethAlbums = () => {
return axios.get(`https://jsonplaceholder.typicode.com/albums/`)
}

export const fethPhotos = () => {
return axios.get(`https://jsonplaceholder.typicode.com/photos/`)
}

export const fethtodos = () => {
return axios.get(`https://jsonplaceholder.typicode.com/todos/`)
}

export const fethUsers = () => {
return axios.get(`https://jsonplaceholder.typicode.com/users/`)
}