const roomsEndpoint = "http://localhost:3000/api/accommodations";
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
};
//var fs = require('fs');
//var accommodations = JSON.parse(fs.readFileSync('./data/accommodations.json', 'utf8'));

const rooms = async function (req, res, next) {
    // console.log("ROOMS CONTROLLER BEGIN");
    await fetch(roomsEndpoint, options)
        .then((res) => res.json())
        .then((json) => {
          let message = null;
          if (!(json instanceof Array)) {
            message = "API lookup error";
            json = [];
          } else {
            if (!json.length) {
                message = "No accommodations exist in our database";
            }
          }
          res.render("rooms", { title: "Travlr Getaways", accommodations: json, message });
    })
    .catch((err) => res.status(500).send(err.message));
};

module.exports = {
    rooms
};
