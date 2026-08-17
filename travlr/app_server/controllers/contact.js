const fs = require('fs');
//const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const notify = JSON.parse(fs.readFileSync('./data/notify.json', 'utf8'));

const contact = (req, res) => {
    // pageTitle = packageJson.description + ' | Contact';
    res.render('contact', {title: 'Contact', notify});
};

module.exports = {
    contact
};