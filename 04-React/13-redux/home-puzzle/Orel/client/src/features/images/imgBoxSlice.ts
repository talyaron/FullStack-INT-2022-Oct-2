import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, } from "../../app/store"
import { getImagesAsync } from "./ImagesAPI"


export enum ImageCategory {
    NATURE = "טבע",
    TRAVEL = "טיולים",
    FAMILY = "משפחה",
    SPORT = "ספורט",
    PERSONAL = "אישי",
    ANIMAL = "חיות"
}

export interface IImage {
    _id:string,
    name: string,
    src: string,
    category: string
}

export interface ImagesState {
    images: IImage[]
    status: "idle" | "loading" | "failed"
}

const listOfImage: IImage[] = [
    
    {
        _id: "03",
        name: "Beach Vacation",
        src: "https://www.sandals.com/blog/content/images/2022/03/Sandals-Grande-Antigua-Long-Beach-Overview.jpg",
        category: ImageCategory.TRAVEL
    },
    {
        _id: "04",
        name: "Mountain Hike",
        src: "https://cdn1.matadornetwork.com/blogs/1/2020/06/Tourist-on-the-peak-of-high-rocks-1200x836.jpg",
        category: ImageCategory.TRAVEL
    },
    {
        _id: "05",
        name: "Family Gathering",
        src: "https://www.superberries.com/assets/images/Family%20Gatherings%20Blog%202.jpg",
        category: ImageCategory.PERSONAL
    },
    {
        _id: "06",
        name: "City Skyline",
        src: "https://i0.wp.com/floridatraveler.com/wp-content/uploads/2017/04/Tampa-Skyline-DSC_4660.jpg?fit=1800%2C980&ssl=1",
        category: ImageCategory.TRAVEL
    },
    {
        _id: "07",
        name: "Wedding Ceremony",
        src: "https://www.wedgewoodweddings.com/hubfs/3.0%20Feature%20Images%201000%20x%20500%20px/Blog/Lets%20Talk%20About%20Beach%20Weddings.png",
        category: ImageCategory.PERSONAL
    },
    {
        _id: "08",
        name: "Nature Landscape",
        src: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/most-beautiful-nature-landscape-by-elvin-siew-chun-wai-elvin-siew-chun-wai.jpg",
        category: ImageCategory.TRAVEL
    },
    {
        _id: "09",
        name: "Pet Dog",
        src: "https://www.thesprucepets.com/thmb/cmj2zEgPFoWLWunSXyKYQ4IDXpA=/3000x0/filters:no_upscale():strip_icc()/best-dogs-for-first-time-owners-4153979-hero-bb82043e86394be28afcd8582d0da2d6.JPG",
        category: ImageCategory.ANIMAL
    },
    {
        _id: "10",
        name: "Road Trip",
        src: "https://media.cntraveler.com/photos/5edfc029b16364ea435ca862/4:3/w_2664,h_1998,c_limit/Roadtrip-2020-GettyImages-1151192650.jpg",
        category: ImageCategory.TRAVEL
    }
];

const initialState: ImagesState = {
    images: listOfImage,
    status: "idle",
}


export const imageSlice = createSlice({
    name: "images",
    initialState,

    reducers: {
        addNewImage: (state , payload:PayloadAction<IImage>) => {
            state.images = [...state.images, payload.payload];
        },
        deleteImage: (state , payload:PayloadAction<{_id:string}>) => {

             const imagesFiltered = state.images.filter(image => image._id !== payload.payload._id)
             state.images = [...imagesFiltered]
        },
        // Use the PayloadAction type to declare the contents of `action.payload`

        updateImage: (state, payload:PayloadAction<IImage>) => {
            const { _id   , name , src  , category} = payload.payload;
            const index =  state.images.findIndex(image => image._id === _id)
            state.images[index].name = name
            state.images[index].src = src
            if(category) state.images[index].category = category

        
        },
    },
    extraReducers(builder) {
        builder.addCase(getImagesAsync.pending , state => { state.status = "loading"} )
        .addCase(getImagesAsync.fulfilled ,( state , action) => { 
            state.status = "idle"
        let images = action.payload
        if(images) {
            const checkCopies =  Array.from(new Set([...state.images , ...images]));
            state.images = checkCopies
            
            console.log(state.images)
        }
        }
            )
            .addCase(getImagesAsync.rejected, (state) => {
                state.status = "failed"
              })
            
    },
})

export const { addNewImage, deleteImage, updateImage } = imageSlice.actions

export const selectImage = (state: RootState) => state.images.images
export const selectStatus = (state: RootState) => state.images.status

export default imageSlice.reducer
