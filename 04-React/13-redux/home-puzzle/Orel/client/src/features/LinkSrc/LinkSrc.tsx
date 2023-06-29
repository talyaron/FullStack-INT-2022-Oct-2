import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddLinkIcon from '@mui/icons-material/AddLink';
import { Box, Paper, TextField, Typography, styled , Button } from '@mui/material';
import theme from '../../theme';
import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addNewImage } from '../images/imgBoxSlice';



const LinkSrc = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [image , setImage] = useState<{src:string , name:string} | null>(null)
    const [fileName , setFileName] = useState()
    const customStyled = Object({
        color: theme.palette.secondary.main,
        padding: "10x",
        border: "none",
        background: "none",
        margin: "15px",
        cursor: "pointer",
        ":hover": {
            color: theme.palette.primary.light,
        }
    })

    const centerStyle = Object({
        width:"80%",
    })

    const ButtonLink = styled("button")(customStyled)

    const handleClickLinkUpload = (event: any) => {
        console.log(event)
    }
  
    const handleChangeImage = (ev:any) => {
        const {files} = ev.target
        if(files) setImage({name:files[0].name , src:URL.createObjectURL(files[0])})
    }

    const dispatch = useAppDispatch()
    const handleSubmitAddImg = () => {

            const name = image!.name
            const src = image!.src
            if (!name) throw new Error("no name")
            if (!src) throw new Error("no name")
            // if (!category) throw new Error("no category")
            const payload = { name: `${name}`, src: `${src}`, id: `${Math.ceil(Math.random() * 99999)}`, category:"Personal" };
            dispatch(addNewImage(payload))
            setOpen(false)
            setImage(null)

    }

    return (
        <Box>
            <ButtonLink onClick={() => { open ? setOpen(false) : setOpen(true) }}>
                <AddPhotoAlternateIcon />
            </ButtonLink>
            <Box m={3} color={theme.palette.primary.main}
                sx={{
                    border: "1px solid ",
                    zIndex: "999",
                    padding: "25px",
                    backgroundColor: "rgba(255, 255, 255, 0.9);",
                    position: "absolute",
                    width: "250px",
                    right: 50,
                    display: open ? 'block' : 'none',
               


                }}>

                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    gap:"25px",
                    alignItems:"center"
                }}>
                    {image?<img src={image.src}  alt={image.name} style={{
                            maxWidth:"inherit",
                            maxHeight:"80px"
                        }} />:"no image Selected"}
                    <TextField type="file"  sx={centerStyle} hidden onChange={()=>{handleChangeImage(event)}}/>
                        <Button variant="outlined"  onClick={handleSubmitAddImg}>הוסף תמונה</Button>
                </Box>

            </Box>

        </Box>
    )
}

export default LinkSrc
