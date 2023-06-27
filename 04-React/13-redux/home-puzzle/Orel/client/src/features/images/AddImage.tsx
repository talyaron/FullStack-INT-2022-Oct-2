import React, { useState } from "react";
import { ImageCategory } from "./imgBoxSlice";
import { useAppDispatch } from "../../app/hooks";
import { addNewImage } from "./imgBoxSlice";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import theme from "../../theme";
import { createImageAsync } from "./ImagesAPI";


export const AddImage = () => {
    const [open, setOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const [category, setCategory] = useState<string>('');



    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };

    const handleClickAddImg = () => open ? setOpen(false) : setOpen(true);

    const handleSubmitAddImg = (ev: any) => {
        ev.preventDefault();
        try {
            const name = ev.target.elements.name.value;
            const src = ev.target.elements.src.value;
            if (!name) throw new Error("no name");
            if (!src) throw new Error("no name");
            // if (!category) throw new Error("no category")
            const payload = { name: `${name}`, src: `${src}`, id: `${Math.ceil(Math.random() * 99999)}`, category: `${category}` };
            dispatch(addNewImage(payload));
            dispatch(createImageAsync(payload))
            setOpen(false);
            ev.target.reset();

        } catch (error) {
            console.error(error);
        }
    };


    const CategoryList = Object.values(ImageCategory);
    for (const value of CategoryList)
        return (
            <Box>
                <Button variant="contained" onClick={handleClickAddImg}>הוסף תמונה מקישור</Button>
                <Box m={3} color={theme.palette.primary.main}
                    sx={{
                        border: "1px solid ",
                        zIndex: "999",
                        padding: "25px",
                        backgroundColor: "rgba(255, 255, 255, 0.9);",
                        position: "absolute",
                        right: 50,
                        display: open ? 'block' : 'none',
                    }}>
                    <Typography variant="h6">הוסף תמונה חדשה</Typography>
                    <Box m={3} color={theme.palette.primary.main}
                        component="form"
                        onSubmit={() => { handleSubmitAddImg(event); }}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "14px"
                        }}>


                        <TextField dir="rtl" id="name"
                            label="שם לתמונה"
                            type="text"
                            placeholder="הכנס/י שם..."
                            multiline
                            maxRows={4}
                            variant="outlined" />
                        <TextField dir="rtl" id="src"
                            label="קישור לתמונה"
                            maxRows={4}
                            type="text"
                            placeholder="הכנס/י קישור לתמונה...."
                            multiline
                            variant="outlined" />

                        <FormControl fullWidth>
                            <InputLabel id="albumsCategory-label">אלבומים</InputLabel>
                            <Select
                                labelId="albumsCategory-label"
                                id="category"
                                value={category}
                                label="Category"
                                onChange={handleChange}
                            >
                                {CategoryList.map(category => <MenuItem key={category} value={category}>{category}</MenuItem>)}

                            </Select>
                        </FormControl>

                        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                            הוסף
                        </Button>

                    </Box>
                </Box>

            </Box>


        );
};
