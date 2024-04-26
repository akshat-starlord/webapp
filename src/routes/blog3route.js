const express = require('express');
const blog3 = express.Router();

blog3.get('/blog/3', (req, res) => {
    res.send("Blog3");
});

blog3.route('/')
  .get((req, res) => {
    res.render('blog3', {
        nav: [
            {link: '/posts', title: 'Posts'},
            {link: '/about', title: 'About'}
        ],
        title: 'Blog List',
        blog3
    }
    );
  });

module.exports = blog3;