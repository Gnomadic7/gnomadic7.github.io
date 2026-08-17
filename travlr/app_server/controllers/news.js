/*const fs = require('fs');
const latest = JSON.parse(fs.readFileSync('./data/newsLatest.json', 'utf8'));
const tips = JSON.parse(fs.readFileSync('./data/newsTips.json', 'utf8'));
const featured = JSON.parse(fs.readFileSync('./data/newsFeatured.json', 'utf8'));

const news = (req, res) => {
    res.render('news', {title: 'Travlr Getaways', latest, tips, featured});
}*/

/*const mongoose = require('mongoose');
const newsLatest = mongoose.model('newsLatest');
const newsTips = mongoose.model('newsTips');
const newsFeatured = mongoose.model('newsFeatured');*/

const latestEndpoint = 'http://localhost:3000/api/newsLatest';
const tipsEndpoint = 'http://localhost:3000/api/newsTips';
const featuredEndpoint = 'http://localhost:3000/api/newsFeatured';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    },
};

const news = async function (req, res, next) {
    try {
        const [latestResponse, tipsResponse, featuredResponse] = await Promise.all([
            fetch(latestEndpoint, options),
            fetch(tipsEndpoint, options),
            fetch(featuredEndpoint, options)
        ]);
        const [latest, tips, featured] = await Promise.all([
            latestResponse.json(),
            tipsResponse.json(),
            featuredResponse.json()
        ]);
        let message = null;
        if (!(latest instanceof Array)) {
            message = "Latest News API lookup error";
        }
        if (!(tips instanceof Array)) {
            message = "Vacation Tips API lookup error";
        }
        if (!(featured instanceof Array)) {
            message = "Featured News API lookup error";
        }

        res.render("news", {
            title: "Travlr Getaways",
            newsLatest: latest,
            newsTips: tips,
            newsFeatured: featured,
            message
        });
    } catch (err) {
        res.status(500).send(err.message);

    }
};

module.exports = {
    news
};