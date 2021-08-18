import mongoose from "mongoose";

const reviewSchema = mongoose.Schema ({
    name : {
        type : String,
        required: true
    },
    rating : {
        type : Number,
        required: true
    },
    comment : {
        type : String
    }
}, {
    timestamps : true
})

const productSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
    name : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required: true
    },
    image : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    publisher : {
        type : String,
        required : true
    },
    genre : {
        type : [String],
        required : true,
        default : []
    },
    format : {
        type : String,
        required : true
    },
    pages : {
        type : Number,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    countInStock : {
        type : Number,
        required : true,
        default : 0
    },
    rating : {
        type : Number,
        required : true,
        default : 0
    },
    numReviews : {
        type : Number,
        required: true,
        default : 0
    },
    reviews : {
        type : [reviewSchema]
    }
}, {
    timestamps : true
})

const Product = mongoose.model('Product', productSchema);

export default Product ;
