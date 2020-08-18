import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.set('puerto', process.env.PORT || 3000)
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })