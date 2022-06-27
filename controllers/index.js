const router = require('express').Router();

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard-routes');

router.use('api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboardRoutes', dashboardRoutes);

module.exports = router;