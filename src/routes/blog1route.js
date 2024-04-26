const express = require('express');
const blog1 = express.Router();

blog1.get('/blog/1', (req, res) => {
    res.send("Blog1");
});

blog1.route('/')
  .get((req, res) => {
    res.render('blog1', {
        nav: [
            {link: '/posts', title: 'Posts'},
            {link: '/about', title: 'About'}
        ],
        title: 'Blog List',
        blog1
    }
    );
  });


module.exports = blog1;