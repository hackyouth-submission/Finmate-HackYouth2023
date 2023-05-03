const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const dbConnect = require('./configs/dbconnect')
const initRoutes = require('./routes');
const cors = require('cors');

const cookieParser = require('cookie-parser')

const app = express();
const port = process.env.PORT || 8888

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect()
initRoutes(app)

app.use('/', (req, res) => { res.send('SERVER WORKING...') })

app.listen(port, () => {
    console.log('Server running on the port: ' + port);
})