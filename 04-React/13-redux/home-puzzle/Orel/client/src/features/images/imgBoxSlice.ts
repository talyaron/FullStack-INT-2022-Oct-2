import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, } from "../../app/store"


export enum ImageCategory {
    NATURE = "טבע",
    TRAVEL = "טיולים",
    FAMILY = "משפחה",
    SPORT = "ספורט",
    PERSONAL = "אישי",
    ANIMAL = "חיות"
}

export interface IImage {
    id:string,
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
        id: "03",
        name: "Beach Vacation",
        src: "https://www.sandals.com/blog/content/images/2022/03/Sandals-Grande-Antigua-Long-Beach-Overview.jpg",
        category: ImageCategory.TRAVEL
    },
    {
        id: "04",
        name: "Mountain Hike",
        src: "https://cdn1.matadornetwork.com/blogs/1/2020/06/Tourist-on-the-peak-of-high-rocks-1200x836.jpg",
        category: ImageCategory.TRAVEL
    },
    {
        id: "05",
        name: "Family Gathering",
        src: "https://www.superberries.com/assets/images/Family%20Gatherings%20Blog%202.jpg",
        category: ImageCategory.PERSONAL
    },
    {
        id: "06",
        name: "City Skyline",
        src: "https://i0.wp.com/floridatraveler.com/wp-content/uploads/2017/04/Tampa-Skyline-DSC_4660.jpg?fit=1800%2C980&ssl=1",
        category: ImageCategory.TRAVEL
    },
    {
        id: "07",
        name: "Wedding Ceremony",
        src: "https://www.wedgewoodweddings.com/hubfs/3.0%20Feature%20Images%201000%20x%20500%20px/Blog/Lets%20Talk%20About%20Beach%20Weddings.png",
        category: ImageCategory.PERSONAL
    },
    {
        id: "08",
        name: "Nature Landscape",
        src: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/most-beautiful-nature-landscape-by-elvin-siew-chun-wai-elvin-siew-chun-wai.jpg",
        category: ImageCategory.TRAVEL
    },
    {
        id: "09",
        name: "Pet Dog",
        src: "https://www.thesprucepets.com/thmb/cmj2zEgPFoWLWunSXyKYQ4IDXpA=/3000x0/filters:no_upscale():strip_icc()/best-dogs-for-first-time-owners-4153979-hero-bb82043e86394be28afcd8582d0da2d6.JPG",
        category: ImageCategory.ANIMAL
    },
    {
        id: "10",
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
        deleteImage: (state , payload:PayloadAction<{id:string}>) => {

             const imagesFiltered = state.images.filter(image => image.id !== payload.payload.id)
             state.images = [...imagesFiltered]
        },
        // Use the PayloadAction type to declare the contents of `action.payload`

        updateImage: (state, payload:PayloadAction<IImage>) => {
            const { id   , name , src  , category} = payload.payload;
            const index =  state.images.findIndex(image => image.id === id)
            state.images[index].name = name
            state.images[index].src = src
            if(category) state.images[index].category = category

        
        },
    },
    // extraReducers(builder) {
    //     builder.addCase()
    // },
})

export const { addNewImage, deleteImage, updateImage } = imageSlice.actions

export const selectImage = (state: RootState) => state.images


export default imageSlice.reducer
