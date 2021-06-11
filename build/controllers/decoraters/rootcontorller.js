"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("./controller");
var routes_1 = require("./routes");
var Use_1 = require("./Use");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        return next();
    }
    res.status(403);
    res.send('not permitted to enter - please login');
}
var rootController = /** @class */ (function () {
    function rootController() {
    }
    rootController.prototype.getRoot = function (req, res) {
        if (req.session && req.session.loggedIn) {
            res.send("\n    <div>\n     <div> your are logged in </div>\n     <a href='/auth/logout'> LogOut </a>\n     </div>\n    \n    ");
        }
        else {
            res.send("\n    <div>\n     <div> your are NOT logged in </div>\n     <a href='/auth/login'> LOGIN </a>\n     </div>\n    \n    ");
        }
    };
    rootController.prototype.getProtected = function (req, res) {
        res.send('welcome to protected area');
    };
    __decorate([
        routes_1.get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], rootController.prototype, "getRoot", null);
    __decorate([
        routes_1.get('/protected'),
        Use_1.use(requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], rootController.prototype, "getProtected", null);
    rootController = __decorate([
        controller_1.controller('')
    ], rootController);
    return rootController;
}());
