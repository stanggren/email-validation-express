const { urlencoded } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const helper = require('./helper.js');

const app = express();

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({extended: false});

const customers = [
    {id: 1, firstName: 'Fox', lastName: 'Mulder', email: "foxmulder@yahoo.com"},
    {id: 2, firstName: 'Dana', lastName: 'Scully', email: "danascully@hotmail.com"},
    {id: 3, firstName: 'Steve', lastName: 'Buscemi', email: "stevebuscemi@gmail.com"}
];

app.get('/api/customers', (req, res) => {
    res.json(customers);
});

app.post('/api/submit', jsonParser, (req, res, next) => {
    let validationObj = helper.generateValidationList(req.body);
    if (helper.checkBooleans(validationObj)) helper.addCustomer(req.body, customers);
    res.json(validationObj);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));