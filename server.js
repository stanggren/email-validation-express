const { urlencoded } = require('express');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Steve', lastName: 'Smith'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'}
    ];

    res.json(customers);
});

app.post('/api/submit', jsonParser, (req, res) => {
    console.log("inside post")
    console.log(req.body.name);
    res.json( {status: "ok"});
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));