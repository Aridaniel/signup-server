const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

const PORT = process.env.PORT || 4000

//For enabling dotenv
dotenv.config()



//Connecting to monoose database, use DATABASE_ACCESS variable from .env file
mongoose.connect(process.env.DATABASE_ACCESS, { useUnifiedTopology: true,  useNewUrlParser: true }, () => console.log('Database connected jiiiiii'))

app.use(express.json())
app.use(cors())

app.use('/app', routesUrls)


app.get('/', (request, response) => {
    response.send('SÆLIRRR')
})
app.listen(PORT, () => console.log('Server is running'))


