// projede kurulması gereken modüller
const express = require('express') // web api çalıştırır
const bodyParser = require('body-parser') // json <=> nodejs çevirme işlemlerini yapar
const _ = require('lodash')// 

const app = express()
app.use(bodyParser.json())

app.get('/api/hello', (req, res) => {

    res.send('Hello World')
})

app.get('/api/merhaba', (req, res) => {

    res.send('Merhaba Dünya')
})

app.post('/api/name', (req, res) => {

    const body = _.pick(req.body, ['firstName','lastName'])
    console.log(body)
    res.send('Merhaba '+body.firstName+' '+body.lastName)
})

app.listen(8080, () => {
    console.log('app server is running')
})

//az üstbaslık altbaşlık parametreler
// üstbaşlık vm gibi altbaşlık login gibi