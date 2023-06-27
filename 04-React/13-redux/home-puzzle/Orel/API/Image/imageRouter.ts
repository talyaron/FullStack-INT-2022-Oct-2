import { Router } from "express";
import { 
    createNewImage, getImages

} from "./ImageControl";

const router = Router();

router
.post('/create-image' , createNewImage)
.get('/get-images', getImages)


export default router