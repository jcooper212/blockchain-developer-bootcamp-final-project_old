const routes = require('next-routes')();

routes.add('/workstreams/new', '/workstreams/new');
routes.add('/workstreams/:address', '/workstreams/show');
routes.add('/workstreams/:address/requests', '/workstreams/requests');
routes.add('/workstreams/:address/new_request', '/workstreams/new_request');


module.exports = routes;
