// app.js - simple Express app (or use your own simple app)
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Hello from CI pipeline!'));
app.listen(PORT, () => console.log(`Listening ${PORT}`));
