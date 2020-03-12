const compression = require("compression");
const express = require("express");

const app = express();
app.use(compression());

const port = 3000

app.use(express.static('ui'));
app.get('/', (req, res) => res.send('Hello World!2'));
app.get('/headers', (req, res) => {
    res.status(418);
    res.set('X-App-Test', 'Setting custom headers');
    res.send('yo!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
