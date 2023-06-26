import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { deleteImage } from "./imgBoxSlice";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, PaperProps } from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
import Draggable from 'react-draggable';
import { updateImageByIDProps } from "./UpdateImageByID";


export const DeleteImageByID: React.FC<updateImageByIDProps> = ({ id }) => {
    const [open, setOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();


    const handleClickOpenAlert = () => open ? setOpen(false) : setOpen(true);

    const handleSubmitDeleteImage = () => {
        try {

            dispatch(deleteImage({ id }));
            handleClickOpenAlert();

        } catch (error) {
            console.error(error);
        }
    };

    function PaperComponent(props: PaperProps) {
        return (
            <Draggable
                handle="#draggable-dialog-title"
                cancel={'[class*="MuiDialogContent-root"]'}
            >
                <Paper {...props} />
            </Draggable>
        );
    }
    return (
        <Box sx={{
            minWidth: "100%",
            minHeight: "100%"
        }}>
            <Button variant="text" onClick={handleClickOpenAlert}>
                <DeleteForever />
            </Button>
            <Dialog
                open={open}
                onClose={handleClickOpenAlert}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle dir="rtl" style={{ cursor: 'move' }} id="draggable-dialog-title">
                    מחיקה
                </DialogTitle>
                <DialogContent>
                    <DialogContentText dir="rtl">
                        האם אתה בטוח רוצה למחוק את התמונה ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions dir="rtl">
                    <Button autoFocus onClick={handleClickOpenAlert}>
                        בטל
                    </Button>
                    <Button onClick={handleSubmitDeleteImage}>מחק</Button>
                </DialogActions>
            </Dialog>


        </Box>


    );
};
