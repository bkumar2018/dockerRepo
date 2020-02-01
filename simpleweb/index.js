const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send('Hi There');
});

app.listen(8888, () => {
    console.log('Listening on port 8888');
});
