const { default: baseApi } = require('./baseApi');

async function deletePostById(id) {
    const res = await baseApi.delete(`/posts/${id}`);
    return res.data;
}

export default deletePostById;
