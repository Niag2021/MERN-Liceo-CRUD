const color = require('colors');
const express = require('express');

const app = express();

app.listen(3003, () => {
    console.log(app.get('appName'));
    console.log('Servidor en puerto 3003.'.yellow.bgGreen);
});
