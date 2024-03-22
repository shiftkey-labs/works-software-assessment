import express,{ Request, Response, NextFunction } from 'express';
import noteRouter from './routes/noteRoutes';
import bodyParser from 'body-parser';
import requestLoggerMiddleware from './middleware/requestLoggerMiddleware'


const app = express();

app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())

//logger middleware
app.use(requestLoggerMiddleware);

//Default route redirection
app.get('/', (request, response) => {
    response.redirect('/note');
});

app.use("/note",noteRouter)

const port=3000
app.listen(port,()=>{
    console.log("Server started at port :"+port)
})
