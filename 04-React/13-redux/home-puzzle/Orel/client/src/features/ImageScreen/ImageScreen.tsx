import { Box } from '@mui/material'
import theme from '../../theme'
interface ImageScreenProps{
  name:string,
  src:string
}

const ImageScreen:React.FC<ImageScreenProps> = ({name , src}) => {
  return (
    <Box sx={{
      borderRadius:"10px",
      zIndex: 9999,
      padding: "20px",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50% , -50%)",
      width: "70vw",
      height: "70vh",
      background: " linear-gradient(to left, #FF9235, #30f8BF)",
      boxShadow:"inset 0px 0px 2px black",
    }}>

    <img src={src} alt={name} style={{
      width:"inherit",
      objectFit:"cover",
      borderRadius:"10px",
      boxShadow:" 0px 0px 2px black",
      height:"inherit"
    }}/>
    </Box>
    
  )
}

export default ImageScreen
