import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from '@mui/material';

const DeleteDialog = ({ open, onClose, onDeleteHandler }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <Box sx={{ p: 2 }}>
                <DialogTitle>
                    <Typography gutterBottom variant="h6">
                        Deleting post
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Typography gutterBottom>
                        Are you sure you want to delete this post click delete
                        to continue
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={onDeleteHandler}
                        fullWidth
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
};

export default DeleteDialog;
