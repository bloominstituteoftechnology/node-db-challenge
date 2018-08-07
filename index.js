const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Lambda School RDBMS Challange');
});

app.listen(6000, () => {
    console.log('Example app listening on port 6000!');
});

//Run app, then load http://localhost:6000 in a browser to see the output.