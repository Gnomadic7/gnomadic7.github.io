const fs = require('fs');
//const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const us = JSON.parse(fs.readFileSync('./data/us.json', 'utf8'));

const about = (req, res) => {
    // pageTitle = packageJson.description + ' | About';
    res.render('about', { title: 'about', us});
};

module.exports = {
    about
};