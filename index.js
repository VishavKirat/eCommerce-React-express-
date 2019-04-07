 const express = require('express')
 let app = express()

app.get('/',function (req,res){
    res.send('hello')
})
app.get('/book-store/:id',function(req,res){
    res.end('this is the book-store')
})


 app.listen('3000','127.0.0.1')