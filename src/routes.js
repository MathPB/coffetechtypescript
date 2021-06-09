"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var UserController_1 = require("./controllers/UserController");
var routes = express_1.Router();
exports.routes = routes;
var userController = new UserController_1.UserController();
routes.get("/", userController.list);
routes.get("/:name", userController.choices);
