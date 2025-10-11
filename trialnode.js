import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method}, ${req.url}`);
    next();
});

const adminPerm = (req, res, next) => {
  // Check if the route starts with /admin
  if (req.url.startsWith('/admin')) {
    if (req.query.admin === 'true') {
      next(); // user allowed, move on to route
    } else {
      return res.send('Access denied: Admin only');
    }
  } else {
    next(); // not /admin, move on
  }
};

// Apply middleware
app.use(adminPerm);


app.get('/write', (req, res) => {
    fs.writeFileSync('data.txt', 'Learning node');
    res.send('wrote successfully');
});
app.get('/reads', (req, res) => {
    const content = fs.readFileSync('data.txt', 'utf-8');
    res.send(`file content is ${content}`);
});

app.get('/append', (req, res) => {
    const date = new Date().toLocaleString();
    fs.appendFileSync('data.txt', `\n${date}`, 'utf-8')
    res.send('date appended')
});
app.get('/admin', (req, res) => {
    res.send('For admins only');
});
app.get('/greet', (req, res) => {
  const name = req.query.name || 'Guest';
  res.send(`Helo, ${name} !`);
});
app.get('/json', (req, res) => {
  res.json({hi: 'you are'});
});
app.post('/message', (req, res) => {
  const {msg} = req.body;
  fs.appendFileSync('data.txt', msg);
  res.send('written in data.txt successfully');
});
app.get('/message', (req, res) => {
  if (fs.existsSync('data.txt')) {
    const content = fs.readFileSync('data.txt', 'utf-8');
    res.send(content);
  } else {
    res.send('data.txt does not exist');
  }
});

app.delete('/delete-file', (req, res) => {
  if (fs.existsSync('data.txt')) {
    fs.rmSync('data.txt');
    res.send('data.txt deleted successfully');
  } else {
    res.send('data.txt does not exist');
  }
});

app.get('/user/:id', (req, res) => {
  const id  = req.params.id;
  res.send(`U requested user ${id}`)
});
app.get('/product/:name/:price', (req, res) => {
  const name  = req.params.name;
    const price  = req.params.price;
  res.send(`U requested user ${name} ${price}`)
});

app.listen(3000, () => {
    console.log('success')
})