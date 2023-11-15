// Create web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Create a route for DELETE /comments/:id
// 5. Create a route for PUT /comments/:id
// 6. Create a route for PATCH /comments/:id

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const uuidv4 = require('uuid/v4');

const app = express();
const port = 3000;

const commentsPath = path.join(__dirname, 'comments.json');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  fs.readFile(commentsPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }

    let comments;
    try {
      comments = JSON.parse(data);
    } catch (e) {
      res.status(500).json({ message: e.message });
      return;
    }

    res.json(comments);
  });
});

app.post('/comments', (req, res) => {
  fs.readFile(commentsPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }

    let comments;
    try {
      comments = JSON.parse(data);
    } catch (e) {
      res.status(500).json({ message: e.message });
      return;
    }

    const comment = req.body;
    comment.id = uuidv4();
    comments.push(comment);

    fs.writeFile(commentsPath, JSON.stringify(comments), (err) => {
      if (err) {
        res.status(500).json({ message: err.message });
        return;
      }

      res.json(comment);
    });
  });
});

app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;

  fs.readFile(commentsPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }

    let comments;
    try {
      comments = JSON.parse(data);
    } catch (e) {
      res