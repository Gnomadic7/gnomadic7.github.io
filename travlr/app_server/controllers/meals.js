const mealsEndpoint = "http://localhost:3000/api/food";
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
};
//var fs = require('fs');
//var food = JSON.parse(fs.readFileSync('./data/food.json', 'utf8'));

const meals = async function (req, res, next) {
    // console.log("MEALS CONTROLLER BEGIN");
    await fetch(mealsEndpoint, options)
        .then((res) => res.json())
        .then((json) => {
          let message = null;
          if (!(json instanceof Array)) {
            message = "API lookup error";
            json = [];
          } else {
            if (!json.length) {
                message = "No food items exist in our database";
            }
          }
          res.render("meals", { title: "Travlr Getaways", food: json, message });
    })
    .catch((err) => res.status(500).send(err.message));
};

module.exports = {
    meals
};
