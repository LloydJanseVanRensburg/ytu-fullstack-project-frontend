import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Paper,
    TextField,
    Typography,
} from '@mui/material';

const FormDialog = ({ onClose, open, formik }) => {
    return (
        <Dialog onClose={onClose} open={open}>
            <Paper
                sx={{
                    width: '400px',
                }}
            >
                <DialogTitle>
                    <Typography variant="h6">
                        {formik.values.id ? 'Edit post' : 'Create a new post'}
                    </Typography>
                </DialogTitle>

                <DialogContent>
                    <TextField
                        label="Title"
                        fullWidth
                        value={formik.values.title}
                        onChange={formik.handleChange('title')}
                        onBlur={formik.handleBlur('title')}
                        error={formik.touched.title && formik.errors.title}
                        helperText={formik.touched.title && formik.errors.title}
                        sx={{ mt: 2 }}
                    />

                    <TextField
                        label="Body"
                        fullWidth
                        value={formik.values.body}
                        onChange={formik.handleChange('body')}
                        onBlur={formik.handleBlur('body')}
                        error={formik.touched.body && formik.errors.body}
                        helperText={formik.touched.body && formik.errors.body}
                        sx={{ my: 2 }}
                    />

                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => formik.handleSubmit()}
                        disabled={
                            !formik.isValid ||
                            formik.isSubmitting ||
                            (!formik.dirty && formik.isValid)
                        }
                    >
                        {formik.values.id ? 'Update' : 'Create'}
                    </Button>
                </DialogContent>
            </Paper>
        </Dialog>
    );
};

export default FormDialog;
