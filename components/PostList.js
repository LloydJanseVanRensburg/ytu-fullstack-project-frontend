import { Box, Paper, Typography } from '@mui/material';
import PostCard from './PostCard';

const PostList = ({
    posts,
    setDeletePost,
    formik,
    setToggleDeleteDialog,
    setToggleFormDialog,
}) => {
    return (
        <Paper
            sx={{
                width: '100%',
                height: '80vh',
                overflow: 'auto',
                p: 1,
            }}
        >
            {posts.length === 0 && (
                <Box
                    sx={{
                        height: '100%',
                        width: '100%',
                        display: 'grid',
                        placeItems: 'center',
                    }}
                >
                    <Typography variant="h6">No posts found</Typography>
                </Box>
            )}

            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    post={post}
                    onDelete={() => {
                        setDeletePost(post.id);
                        setToggleDeleteDialog(true);
                    }}
                    onEdit={() => {
                        formik.setFieldValue('title', post.title);
                        formik.setFieldValue('body', post.body);
                        formik.setFieldValue('id', post.id);
                        setToggleFormDialog(true);
                    }}
                />
            ))}
        </Paper>
    );
};

export default PostList;
