import express from 'express';

import Routes from './routes/task.js'


const app = express();


app.use(express.json());

app.use('/api', Routes)



app.listen(9000,async () => {
    console.log("Server  Running");
})