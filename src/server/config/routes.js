// const homeController = require('../controllers/home.controller');
const getUserNameController = require('../controllers/getUserName.controller');

module.exports.http = (app) => {
    // Build the bindings between each route and their controller
    app.get('/api/getUsername', getUserNameController.getUserName);
};
