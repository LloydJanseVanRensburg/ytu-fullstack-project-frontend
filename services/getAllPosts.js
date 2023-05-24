import baseApi from './baseApi';

async function getAllPosts() {
    const res = await baseApi.get('/posts');
    return res.data;
}

export default getAllPosts;
