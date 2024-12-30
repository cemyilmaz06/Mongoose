"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Mongoose:

const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    }
})

