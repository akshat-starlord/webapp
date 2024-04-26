const express = require('express');
const blog2 = express.Router();

blog2.get('/blog/2', (req, res) => {
    res.send("Blog2");
});

blog2.route('/')
  .get((req, res) => {
    res.render('blog2', {
        nav: [
            {link: '/posts', title: 'Posts'},
            {link: '/about', title: 'About'}
        ],
        title: 'Blog List',
        blog2
    }
    );
  });

module.exports = blog2;