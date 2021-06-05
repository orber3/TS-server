"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var loginRoute_1 = require("./routes/loginRoute");
var cookie_session_1 = __importDefault(require("cookie-session"));
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['asdasd'] }));
app.use(loginRoute_1.router);
app.get('/', function (req, res) {
    res.send("\n    <div>\n    <h1> hey </h1>\n    </div>\n\n  ");
});
app.listen(3000, function () {
    console.log('listen on port 3000');
});
