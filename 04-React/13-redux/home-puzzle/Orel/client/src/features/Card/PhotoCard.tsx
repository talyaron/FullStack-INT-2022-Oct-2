
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { DeleteImageByID } from "../images/DeleteImageByID";
import { UpdateImageByID } from "../images/UpdateImageByID";

export interface PhotoCardProps {
  name: string,
  src: string,
  category: string,
  _id:string,

}
const PhotoCard: React.FC<PhotoCardProps> = ({ name, src, category, _id }) => {
  return (

    <Card sx={{ width: 400, height: 425 , marginTop:4 , borderRadius:"15px"  , bgcolor:"rgba(255, 255, 255, 0.514)"}} >
      <CardActionArea sx={{
        minWidth: 300,
        paddingBottom: 5
      }}>
        <CardMedia component="img"
          image={src}
          alt={name}
          sx={{
            width: "450px",
            height: "300px"
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5" >
            {name}
          </Typography>
          <Typography
            gutterBottom
            variant="caption"
            color="text.secondary">
            {category}
          </Typography>
          <Box sx={{ 
            margin:"auto",
            width: "90%"  ,
             display:"flex" ,
              justifyContent:"space-evenly",
              alignItems:"center"
              }}>
            <UpdateImageByID _id={_id} />
            <DeleteImageByID _id={_id}/>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>

  );
}

export default PhotoCard