const express = require('express');
const app = express();

app.use(require('./app'));

app.listen(3000);
console.log('Server on port', 3000);


