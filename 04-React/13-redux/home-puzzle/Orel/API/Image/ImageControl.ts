import ImageModel from "./ImageModel";



export const createNewImage = async (req: any, res: any) => {
    try {
        const { name, src, category } = req.body
        if (!name) throw new Error("No name")
        if (!src) throw new Error("No src")
        if (!category) throw new Error("No category")
        const newImage = await ImageModel.create({ name, src, category })
        if (!newImage) throw new Error("no create image")
        res.status(200).send({ success: true, image: newImage })
    } catch (error: any) {
        console.error({ success: false, message: error.message })
        res.status(500).send({ success: true, message: error.message })
    }
}

export const getImages = async (req: any, res: any) => {
    try {
        const images = await ImageModel.find({})
        if (!images) return res.status(400).send({success: false, message:"no found images on DB"})
        res.status(200).send({ success: true, images })
    } catch (error: any) {
        console.error({ success: false, message: error.message })
        res.status(500).send({ success: true, message: error.message })
    }
}