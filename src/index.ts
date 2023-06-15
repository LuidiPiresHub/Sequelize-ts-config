import express from 'express';
import User from './database/models/user';

const app = express();

app.get('/users', async (_req, res) => {
  const data = await User.findAll();
  return res.status(200).json({ message: data });
});

const port = 3001;

app.listen(port, () => console.log(`App is running on port: ${port}!`));
