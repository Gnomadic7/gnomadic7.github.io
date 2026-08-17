const express = require("express"); // Express app
const router = express.Router(); // Router logic

const jwt = require('jsonwebtoken'); // Enable JSON web tokens

// Method to authenticate our JWT
function authenticateJWT(req, res, next) {
    // console.log('In Middleware');
    const authHeader = req.headers['authorization'];
    // console.log('Auth Header: ' + authHeader);

    if(authHeader == null)
    {
        console.log('Auth Header Required but NOT PRESENT!');
        return res.sendStatus(401);
    }

    let headers = authHeader.split(' ');
    if(headers.length < 1)
    {
        console.log('Not enough token in Auth Header: ' + headers.length);
        return res.sendStatus(501);
    }

    const token = authHeader.split(' ')[1];
    // console.log('Token; ' + token);

    if(token == null)
    {
        console.log('Null Bearer Token');
        return res.sendStatus(401);
    }

    // console.log(process.env.JWT_SECRET)
    // console.log(jwt.decode(token));
    const verified = jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
        if(err)
        {
            return res.sendStatus(401).json('Token Validation Error!');
        }
        req.auth = verified; // Set the auth param to the decoded object
    });
    next(); //We need to continue or this will hang forever
}
// This is where we import the controllers we will route
const tripsController = require("../controllers/trips");
const foodController = require("../controllers/food");
const accommodationsController = require("../controllers/accommodations");
//const infoController = require("../controllers/info");
const newsFeaturedController = require("../controllers/newsFeatured");
const newsLatestController = require("../controllers/newsLatest");
const newsTipsController = require("../controllers/newsTips");
const authController = require("../controllers/authentication");

router.route("/register").post(authController.register);
router.route("/login").post(authController.login);
// define route for our trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList) // GET Method routes tripList
    .post(authenticateJWT, tripsController.tripsAddTrip); // POST Method adds a trip
// GET Method routes tripsFindByCode - requires parameter
// PUT Method routes tripsUpdateTrip
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(authenticateJWT, tripsController.tripsUpdateTrip);

// define route for our meals endpoint
router
    .route("/food")
    .get(foodController.mealsList)
    .post(authenticateJWT, foodController.mealsAddMeal); // POST Method adds a meal
// GET Method routes mealsFindByCode - requires parameter
router
    .route('/food/:mealCode')
    .get(foodController.mealsFindByCode)
    .put(authenticateJWT, foodController.mealsUpdateMeal);

// define route for our accommodations endpoint
router
    .route("/accommodations")
    .get(accommodationsController.roomsList)
    .post(authenticateJWT, accommodationsController.roomsAddRoom); // POST Method adds a room
// GET Method routes roomsFindByCode - requires parameter
router
    .route('/accommodations/:roomCode')
    .get(accommodationsController.roomsFindByCode)
    .put(authenticateJWT, accommodationsController.roomsUpdateRoom);

// define route for our info endpoint
/*router
    .route("/info")
    .get(infoController.newsList);
// GET Method routes newsFindByCode - requires parameter
router
    .route('/info/:newsCode')
    .get(infoController.newsFindByCode);
*/
// define route for our newsFeatured endpoint
router
    .route("/newsfeatured")
    .get(newsFeaturedController.featuredList);
// GET Method routes newsFindByCode - requires parameter
router
    .route('/newsfeatured/:newsCode')
    .get(newsFeaturedController.featuredFindByCode)
    .put(authenticateJWT, newsFeaturedController.featuredUpdateNews);

// define route for our newsLatest endpoint
router
    .route("/newslatest")
    .get(newsLatestController.latestList)
    .post(authenticateJWT, newsLatestController.latestAddNews); // POST Method adds a news item
// GET Method routes newsFindByCode - requires parameter
router
    .route('/newslatest/:newsCode')
    .get(newsLatestController.latestFindByCode)
    .put(authenticateJWT, newsLatestController.latestUpdateNews);

// define route for our newsTips endpoint
router
    .route("/newstips")
    .get(newsTipsController.tipsList)
    .post(authenticateJWT, newsTipsController.tipsAddTip); // POST Method adds a news tip
// GET Method routes newsFindByCode - requires parameter
router
    .route('/newstips/:newsCode')
    .get(newsTipsController.tipsFindByCode)
    .put(authenticateJWT, newsTipsController.tipsUpdateTip);

module.exports = router;