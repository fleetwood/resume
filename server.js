const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(path.resolve(__dirname, 'dist')));

// send the user to index html page inspite of the url
app
  .get('/test', (req, res) => {
    res.render('test', {
      domain: req.get('host'),
      protocol: req.protocol,
      // layout: 'layouts/default'
    });
  })
  .get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
  });

app.listen(port);