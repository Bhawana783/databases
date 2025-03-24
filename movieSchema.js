const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    tytle:{
        type: String,
        required:true,
    },
    director:{
        type:String,
        required:true,
    },
    genre:{
        type:String,
        required:true,
    },
    releaseYear:{
        type: Number,
    },
    availableCopies:{
        type:String,
        required:true,
    }
});
module.exports= mongoose.model('Movie',movieSchema);
