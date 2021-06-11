"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        return next();
    }
    res.status(403);
    res.send('not permitted to enter - please login');
}
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'hi@gmail.com' && password === '1234') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('invalid email\password');
    }
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n  <div>\n   <div> your are logged in </div>\n   <a href='/logout'> LogOut </a>\n   </div>\n  \n  ");
    }
    else {
        res.send("\n  <div>\n   <div> your are NOT logged in </div>\n   <a href='/login'> LOGIN </a>\n   </div>\n  \n  ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('welcome to protected area');
});
