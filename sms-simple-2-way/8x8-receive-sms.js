const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 8088

app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Inbound SMS Server running on port ${PORT} \n`))

app.post('/sms', (req, res) => {
    console.log(' 💬 New message from %s 💬 \n', req.body.payload.source)
    console.log(' ' + req.body.payload.body + '\n')
    res.end()
})
