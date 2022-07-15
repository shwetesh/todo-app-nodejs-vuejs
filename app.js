import express from "express";
import mongoose from "mongoose";
import router from "./router/roter.js";



const app = express();
app.use(express.json())

mongoose.connect('mongodb://mongohost/contactdb', {useNewUrlParser: true});
mongoose.connection.on('open', () => console.log('mongodb connected...'))

app.use('/',express.static('public')); // for html css javascript
app.use('/todo',router)

app.listen(8000, () => console.log('server started'));