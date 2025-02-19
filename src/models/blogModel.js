"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Mongoose:

const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
require('dotenv').config()
const BlogSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    }
})

module.exports = mongoose.model('Blog', BlogSchema)