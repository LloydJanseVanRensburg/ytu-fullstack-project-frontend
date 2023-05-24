import DeleteDialog from '@/components/DeleteDialog';
import FormDialog from '@/components/FormDialog';
import PostList from '@/components/PostList';
import createNewPost from '@/services/createNewPost';
import deletePostById from '@/services/deletePostById';
import getAllPosts from '@/services/getAllPosts';
import updatePostById from '@/services/updatePostById';
import { Box, Button, Container, Grid } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';

const validationSchema = yup.object({
    title: yup.string().required('Please enter value'),
    body: yup.string().required('Please enter value'),
});

const HomePage = ({ posts = [] }) => {
    const [allPosts, setAllPost] = useState(posts);
    const [toggleFormDialog, setToggleFormDialog] = useState(false);
    const [toggleDeleteDialog, setToggleDeleteDialog] = useState(false);

    const [deletePost, setDeletePost] = useState(null);

    const formik = useFormik({
        initialValues: {
            id: null,
            title: '',
            body: '',
        },
        validationSchema,
        onSubmit: async (values, formikHelpers) => {
            try {
                if (!values.id) {
                    const res = await createNewPost(values);
                    setAllPost((prev) => [res.data, ...prev]);
                } else {
                    const res = await updatePostById(values);
                    setAllPost((prev) =>
                        prev.map((post) => {
                            if (post.id === values.id) {
                                return res.data;
                            }
                            return post;
                        })
                    );
                }
                formikHelpers.resetForm();
                setToggleFormDialog(false);
            } catch (error) {
                console.error(error);
            } finally {
                formikHelpers.setSubmitting(false);
            }
        },
    });

    const handleDelete = async () => {
        setToggleDeleteDialog(false);

        if (!deletePost) return;

        try {
            await deletePostById(deletePost);
            setAllPost((prev) => prev.filter((post) => post.id !== deletePost));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box
            sx={(theme) => ({
                minHeight: '100vh',
                backgroundColor: theme.palette.grey[300],
            })}
        >
            <Container maxWidth="md" sx={{ py: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={() => setToggleFormDialog(true)}
                        >
                            Create new post
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <PostList
                            posts={allPosts}
                            setDeletePost={setDeletePost}
                            formik={formik}
                            setToggleDeleteDialog={setToggleDeleteDialog}
                            setToggleFormDialog={setToggleFormDialog}
                        />
                    </Grid>
                </Grid>
            </Container>

            <FormDialog
                open={toggleFormDialog}
                onClose={() => {
                    setToggleFormDialog(false);
                    formik.resetForm();
                }}
                formik={formik}
            />

            <DeleteDialog
                open={toggleDeleteDialog}
                onClose={() => {
                    setToggleDeleteDialog(false);
                    formik.resetForm();
                }}
                onDeleteHandler={handleDelete}
            />
        </Box>
    );
};

export default HomePage;

export async function getServerSideProps() {
    const posts = await getAllPosts();

    return {
        props: {
            posts: posts.data,
        },
    };
}
