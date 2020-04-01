const express = require('express')
const app = express()
const port = 8000


app.get('/', function(request, response){
    response.sendFile('HomePage/index.html');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
