const {Router} = require('express');

const routes = new Router();

routes.get('/', (req,res) => {
    return res.json({messge: 'ok'});
});

module.exports = routes;