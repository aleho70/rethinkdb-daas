"use strict";
var express = require("express");
var http = require("http");
var debug = require("morgan");
var bodyParser = require("body-parser");
var fn = require("./routes/routes");
var Server = (function () {
    function Server() {
        this.app = express();
        this.app.use(debug('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.post('/api/put', fn.putRoute.bind(fn.putRoute));
        this.app.post('/api/list', fn.listRoute.bind(fn.listRoute));
        this.app.post('/api/update', fn.updateRoute.bind(fn.updateRoute));
        this.app.post('/api/filter', fn.filterRoute.bind(fn.filterRoute));
        this.app.post('/api/delete', fn.deleteRoute.bind(fn.deleteRoute));
        this.app.get('/api', function (req, res) {
            res.status(200).send('Rethink Daas - API Ready!');
        });
        var httpServer = http.createServer(this.app);
        httpServer.listen(3200);
    }
    return Server;
}());
exports.Server = Server;
new Server();
//# sourceMappingURL=main.js.map