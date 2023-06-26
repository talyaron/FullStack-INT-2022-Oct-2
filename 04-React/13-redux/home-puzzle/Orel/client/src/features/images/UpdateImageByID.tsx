import React, { useState } from "react";
import { ImageCategory } from "./imgBoxSlice";
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
    selectImage,
    updateImage
} from "./imgBoxSlice";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import theme from "../../theme";

export interface updateImageByIDProps{
    id:string
}

export const UpdateImageByID: React.FC<updateImageByIDProps> = ({ id }) => {
    const [open, setOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const [category, setCategory] = useState<string>('');
    // const images = useAppSelector(selectImage)
    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };
    const handleClickAddImg = () => open ? setOpen(false) : setOpen(true);

    const handleSubmitAddImg = (ev: any) => {
        ev.preventDefault();
        try {
            const name = ev.target.elements.name.value;
            const src = ev.target.elements.src.value;
            const categoryValue = ev.target.elements[6].value;
            console.log(category);
            const payload = { name: `${name}`, src: `${src}`, id: `${id}`, category: categoryValue };
            dispatch(updateImage(payload));
            setOpen(false);
            ev.target.reset();

        } catch (error) {
            console.error(error);
        }
    };
    const images = useAppSelector(selectImage).images;
    const getImageByID = images.find(image => image.id === id);
    if (!getImageByID) return;
    const CategoryList = Object.values(ImageCategory);
    for (const value of CategoryList)
        return (
            <Box dir="rtl" sx={{
                minWidth: "100%",
                minHeight: "100%"
            }}>
                <Button variant="text" onClick={handleClickAddImg}>
                    <SystemUpdateAltIcon />
                </Button>
                <Box color={theme.palette.primary.main}
                    sx={{
                        zIndex: 999,
                        border: "1px solid ",

                        position: "absolute",
                        top: 0,
                        left: 0,
                        minWidth: "100%",
                        minHeight: "100%",
                        backgroundColor: "#fff",
                        width: "inherit",
                        height: "inherit",
                        display: open ? 'block' : 'none',
                    }}>
                    <Typography variant="h6">עדכן תמונה</Typography>
                    <Box m={3} color={theme.palette.primary.main}
                        component="form"
                        onSubmit={() => { handleSubmitAddImg(event); }}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "14px"
                        }}>
                        <TextField id="name"
                            label="שם תמונה"
                            defaultValue={getImageByID.name}

                            type="text"
                            placeholder="הכנס/י שם...."
                            multiline
                            maxRows={4}
                            variant="outlined" />
                        <TextField id="src"
                            label="קישור לתמונה"
                            defaultValue={getImageByID.src}
                            type="text"
                            placeholder="הכנס/י קישור לתמונה"
                            multiline
                            maxRows={4}
                            variant="outlined" />

                        <FormControl fullWidth>
                            <InputLabel id="albumsCategory-label">אלבומים</InputLabel>
                            <Select
                                labelId="albumsCategory-label"
                                id="category"
                                defaultValue={getImageByID.category}
                                label="Category"
                                onChange={handleChange}
                            >
                                {CategoryList.map(category => <MenuItem key={category} value={category}>{category}</MenuItem>)}

                            </Select>
                        </FormControl>

                        <Button dir="ltr" variant="contained" type="submit" endIcon={<SendIcon />}>
                            עדכן
                        </Button>

                    </Box>
                </Box>

            </Box>


        );
};
