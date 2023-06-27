import { useAppSelector } from "./app/hooks"
import { useState , useEffect} from "react"
import "./App.css"
import { Box, Container, Typography } from "@mui/material"
import Navbar from './features/Navbar/Navbar'
import {
  selectImage, IImage, selectStatus
} from "./features/images/imgBoxSlice";
import PhotoCard from "./features/Card/PhotoCard"
import ImageScreen from "./features/ImageScreen/ImageScreen";
import { useDispatch } from "react-redux"
import { getImagesAsync } from "./features/images/ImagesAPI"
import { AsyncThunkAction } from "@reduxjs/toolkit"



function App() {
  const dispatch = useDispatch()
  const images = useAppSelector(selectImage) as IImage[]
  const imagesStatus = useAppSelector(selectStatus) as String
  const [curDetail , setCurDetail] = useState<{name:string , src:string} | null>(null)
  const [display , setDisplay] = useState<string | null>()

  const handleClickPhoto = (name:string , src:string) =>{

    setCurDetail({name , src})
setTimeout(()=>{
  setCurDetail(null)
},2000)
  }

  useEffect( () => {
    //@ts-ignore
     dispatch(getImagesAsync()) 
  
  },[])


  return (
    <Box  className="App" sx={{
      width: "100vw",
      minHeight: "100vh",
      paddingBottom:"25px",
      position: "relative",
      background: " linear-gradient(to right, #FF8235, #30E8BF)",

    }}>

      <Navbar />
{curDetail?<ImageScreen name={curDetail.name} src={curDetail.src}/>:null}
      <Box sx={{

        boxSizing: "border-box",
        margin: "25px auto",
        display: "flex",
        width: "inherit",
        flexWrap: "wrap",
        justifyContent: "center",
        columnGap:"25px",
        alignItems: "center"
      }}>
        {images !== null ? images.map((image: any) =>
         <Box key={image._id} onDoubleClick={()=>{handleClickPhoto(image.name , image.src)}}> 
          <PhotoCard   name={image.name} src={image.src} category={image.category} _id={image._id} /> 
          </Box>) 
          : <Typography  variant="h1">no found albums</Typography>}
      </Box>


    </Box>
  )
}

export default App
