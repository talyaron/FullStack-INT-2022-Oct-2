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

export interface UpdateImageByIDProps {
    _id: string;
}

export const UpdateImageByID: React.FC<UpdateImageByIDProps> = ({ _id }) => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [category, setCategory] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const handleClickAddImg = () => {
    setOpen(!open);
  };

  const handleSubmitAddImg = (ev: any) => {
    ev.preventDefault();
    try {
      const name = (ev.target as any).elements.name.value;
      console.log("name" , name)
      const src = (ev.target as any).elements.src.value;
      const categoryValue = (ev.target as any).elements[6].value;

        if(!name) throw new Error("no name")
        if(!src) throw new Error("no src")
        if(!categoryValue) throw new Error("no categoryValue")
      const payload = { name, src, _id, category: categoryValue };
      dispatch(updateImage(payload));
      setOpen(false);
      ev.target.reset();
    } catch (error) {
      console.error(error);
    }
  };

  const images = useAppSelector(selectImage);
  if (!images) {
    console.error("no found images");
    return null;
  }

  const getImageByID = images.find(image => image._id === _id);
  if (!getImageByID) return null;

  const CategoryList = Object.values(ImageCategory);

  return (
    <Box dir="rtl" sx={{ minWidth: "100%", minHeight: "100%" }}>
      <Button variant="text" onClick={handleClickAddImg}>
        <SystemUpdateAltIcon />
      </Button>
      <Box
        color={theme.palette.primary.main}
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
        }}
      >
        <Typography variant="h6">עדכן תמונה</Typography>
        <Box
          m={3}
          color={theme.palette.primary.main}
          component="form"
          onSubmit={handleSubmitAddImg}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "14px"
          }}
        >
          <TextField
            id="name"
            label="שם תמונה"
            defaultValue={getImageByID.name}
            type="text"
            placeholder="הכנס/י שם...."
            multiline
            maxRows={4}
            variant="outlined"
          />
          <TextField
            id="src"
            label="קישור לתמונה"
            defaultValue={getImageByID.src}
            type="text"
            placeholder="הכנס/י קישור לתמונה"
            multiline
            maxRows={4}
            variant="outlined"
          />
          <FormControl fullWidth>
            <InputLabel id="albumsCategory-label">אלבומים</InputLabel>
            <Select
              labelId="albumsCategory-label"
              id="category"
              defaultValue={getImageByID.category}
              label="Category"
              onChange={handleChange}
            >
              {CategoryList.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
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
