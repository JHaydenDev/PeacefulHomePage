import axios from 'axios';
const KEY = 'AIzaSyBqqfCjcutYt2kog9iuF5U9YJpmFtxsSC0 ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})