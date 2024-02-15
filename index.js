import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('successfull');
});

app.listen(port, () => {
    console.log('app litsenting on port:' + port);
});

