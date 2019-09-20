const express = require('express');
const app = express();


app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));

app.use(express.urlencoded({
    extended: true
}));


require('./server/config/mongoose')
require('./server/config/routes')(app)

app.all('*',(_, res) => res.sendFile(__dirname + '/public/dist/public/index.html'))

app.listen(3333, () => console.log('shows running on 3333'));