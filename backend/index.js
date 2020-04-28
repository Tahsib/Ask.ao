import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './routes/quesAnsRoutes'
import cors from 'cors';
require('dotenv').config()
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`,{
    useNewUrlParser : true,
    useUnifiedTopology: true
});

app.use(cors());

routes(app);


app.use(express.static('public'));

app.listen(PORT,()=>{
    console.log(`Server listening to ${PORT}`);
});

