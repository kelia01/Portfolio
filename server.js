import express from 'express';
import cors from 'cors';

 const app = express();

 app.use(express.json());
 app.use(cors())

app.get('/', (req, res) => {
    res.send('server is running');
});

app.post('/hello', (req, res) => {
    const { name } = req.body;
    res.send(`Hello ${name}`);
})

app.listen(3000, () => {
    console.log('On port 3000');
})