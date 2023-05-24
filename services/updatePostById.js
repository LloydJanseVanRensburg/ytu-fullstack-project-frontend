import baseApi from './baseApi';

async function updatePostById(values) {
    const res = await baseApi.put(`/posts/${values.id}`, {
        title: values.title,
        body: values.body,
    });
    return res.data;
}

export default updatePostById;
