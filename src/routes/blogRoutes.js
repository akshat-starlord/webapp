const express = require('express');
const blogRouter = express.Router();

const blogs = [
    {
        title: 'Blog 1',
        subtitle: "This is the firstsssss blog",
        author: "Author 1",
        date: "2021-01-01"
    },
    {
        title: 'Blog 2',
        subtitle: "This is the second blog",
        author: "Author 2",
        date: "2021-01-02"
    },
    {
        title: 'Blog 3',
        subtitle: "This is the third blog",
        author: "Author 3",
        date: "2021-01-03"
    }
]

blogRouter.route('/')
  .get((req, res) => {
    res.render('blogs', {
        nav: [
            {link: '/posts', title: 'Posts'},
            {link: '/about', title: 'About'}
        ],
        title: 'Blog List',
        blogs
    }
    );
  });




module.exports = blogRouter;