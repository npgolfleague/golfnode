import 'dotenv/config';
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

console.log('Hello World');
console.log(process.env.MY_SECRET);
app.get('/', (req,res) => {
    res.send('Hello again!')
});

app.listen(process.env.PORT, () =>
    console.log('Listening on port %s', process.env.PORT),
)