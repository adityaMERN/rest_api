//creating a schema
//ID,Name,Email,phone,password,profile image
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    id: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    profile_image: {
        type: Object,
        required: true
    }

})
module.exports = mongoose.model("Posts", PostSchema)