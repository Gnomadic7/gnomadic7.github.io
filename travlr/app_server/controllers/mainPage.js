var fs = require('fs');
var main = JSON.parse(fs.readFileSync('./data/main.json', 'utf8'));
var blog = JSON.parse(fs.readFileSync('./data/mainBlog.json', 'utf8'));
var testimonials = JSON.parse(fs.readFileSync('./data/mainTestimonial.json', 'utf8'));
var sideBar = JSON.parse(fs.readFileSync('./data/mainSideBar.json', 'utf8'));

/*const mongoose = require('mongoose');
const blogs = mongoose.model('blog-posts');
const testimonials = mongoose.model('testimonials');
const sideBar = mongoose.model('sideBar')*/


/* GET homepage*/
const mainPage = async (req, res) => {
    res.render('index', { 
        title: 'Travlr Getaways',
        blog,
        main,
        testimonials,
        sideBar
    });
};

module.exports = {
    mainPage
};