const express = require('express');
const PORT = 3010;
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../build/')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
