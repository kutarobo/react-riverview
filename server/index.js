const express = require('express')
const app = express()

const port = process.env.PORT || 5000

const config = require('./config/key')


// application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))
// application/json
app.use(express.json())


// mongo db 생략.
console.log(config.mongoURI);

app.get('/', (req, res) => res.send('Hello World!!!!'))

app.post('/test', (req, res)=> {
    console.log(req.body);
    return res.status(200).json({
        success: true
    });
})


app.listen(port, () => {
    console.log(`Server Running at ${port}!`)
})