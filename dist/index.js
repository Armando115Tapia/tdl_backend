"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes/routes"));
var body_parser_1 = __importDefault(require("body-parser"));
var initializeMidlewares = function () {
    // CORS
    var corsOptions = {
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    };
    server.app.use(cors_1.default(corsOptions));
    server.app.use(body_parser_1.default.json());
};
var initalizeRoutes = function () {
    server.app.use('/', routes_1.default);
};
var server = server_1.default.instance;
initializeMidlewares();
initalizeRoutes();
server.start();
