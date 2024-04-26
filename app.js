const express = require('express');
const chalk = require('chalk');
const path = require('path');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || PORT;
app.use(morgan('tiny'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.use(express.json());
const feedRoutes = require('./routes/feed');
app.use('/feed', feedRoutes);

const blogRouter = require('./src/routes/blogRoutes');
app.use('/posts', blogRouter);

const blog1Router = require('./src/routes/blog1route');
app.use('/blog/1', blog1Router);
const blog2Router = require('./src/routes/blog2route');
app.use('/blog/2', blog2Router);
const blog3Router = require('./src/routes/blog3route');
app.use('/blog/3', blog3Router);

app.get('/', function(req, res) {
    res.render('index'
    );
});

app.listen(port, function() {
    debug(`Server is running on port ${chalk.green('4000')}`);
    }
);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    name: String
});

const User = mongoose.model('User', userSchema);

mongoose
    .connect( 'mongodb+srv://akshatakansal:09q26jSQtgZhsmU6@bs2205.3vnlp8m.mongodb.net/?retryWrites=true&w=majority&appName=BS2205')
    .then(result => {
    app.listen(4001);
    })
    .catch(err => console.log('err', err))

;
