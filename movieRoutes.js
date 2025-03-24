const express = require('express');
const router = express.Router();
const Movie = require('./movieSchema');

router.post('/',async(req,res)=>{
    try{
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.status(201).send(newMovie);
}catch(err){
    res.status(400).send(error);
}

});

router.get('/',async(req,res)=>{
    try{
        const movie = await movie.find();
        res.status(200).send(movie);
    }catch(err){
        res.status(500).send(error);
    }
});

router.put('/:id',async(req,res)=>{
try{
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id,req.body,{name:true,overwrite:true });
    res.status(200).send(updatedMovie);
}catch(err){
    res.status(404).send('Not fOUND');
}
});
router.delete('/:id',async(req,res)=>{
    try{
        const deletedMovie = await Movie.findByYdAndDelete(req.params.id);
        res.status(200).send({message: 'Movie deleted successfully'});

    }catch(err){
        res.status(500).send(err);
    }
});
module.exports = router;