import baseApi from './baseApi';

async function createNewPost(data) {
    const res = await baseApi.post('/posts', data);
    return res.data;
}

export default createNewPost;
