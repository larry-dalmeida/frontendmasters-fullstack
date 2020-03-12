const compression = require("compression");
const express = require("express");

const app = express();
app.use(compression());

const port = 3000

app.use(express.static('ui'));
app.get("/", (req, res) =>
  res.send(
    "Welcome to World's Monster. This is a dummy site that isn't live yet. No happy ending for you 😈")
);
app.get('/headers', (req, res) => {
    res.status(418);
    res.set('X-App', 'WHOOP');
    res.send('Here is the header test site.');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
