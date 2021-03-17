const express = require('express')
const cors = require('cors')
const jobs = require('../jobs.json')

const app = express()
app.use(cors)


app.get('/jobs-raw', (req, res) =>{
    if(jobs){
        res.json(jobs)
    }else{
        res.status(404).end
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT,() =>{
    console.log (`Server running on http://localhost/${PORT}`)
})