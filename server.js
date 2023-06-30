const express = require('express');
const jsonServer = require('json-server-auth'); // Updated package
const path = require('path');
const cors = require('cors');

const app = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: 'https://expense-tracker-app-indol-delta.vercel.app' }));
app.use('/api', middlewares);
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
