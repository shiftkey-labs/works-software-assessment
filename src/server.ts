import express from 'express';
import noteRouter from './routes/note';
import bodyParser from 'body-parser';

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())

app.use("/note",noteRouter)

const port=3000
app.listen(port,()=>{
    console.log("Server started at port :"+port)
})
