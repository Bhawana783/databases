require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGO_URI,{
    useNewParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log('database connected to MONGO_URI'))
.catch((err)=>console.error(err));

app.use('/movie',require('./movieRoutes'));
const PORT = process.env.PORT||5000;
app.listen(PORT,() => console.log(`Server running on http://localhost:${PORT}`));
