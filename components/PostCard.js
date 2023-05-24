import { Box, Button, Typography } from '@mui/material';

const PostCard = ({ post, onDelete, onEdit }) => {
    return (
        <Box
            key={post.id}
            sx={(theme) => ({
                border: `1px solid ${theme.palette.grey[200]}`,
                p: 2,
                mb: 1,
            })}
        >
            <Typography gutterBottom>{post.title}</Typography>
            <Typography gutterBottom>{post.body}</Typography>
            <Typography gutterBottom>{post.createdAt}</Typography>

            <Button variant="contained" sx={{ mr: 1 }} onClick={onEdit}>
                Edit
            </Button>
            <Button variant="outlined" color="error" onClick={onDelete}>
                Delete
            </Button>
        </Box>
    );
};

export default PostCard;
