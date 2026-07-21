import mongoose from "mongoose";
import paginate from 'mongoose-aggregate-paginate-v2';

const videoSchema = new Schema({
    videFile:{
        type: String,
        required: true
    },
    thumbnail:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    duration:{
        type: Number,
        required: true // through cloudinary
    },
    views:{
        type: Number, 
        default: 0
    },
    isPublished:{
        type: Boolean,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps: true})

videoSchema.plugin(paginate)

export const Video = mongoose.model("Video",videoSchema)