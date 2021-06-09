"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const UserController_1 = require("./controllers/UserController");
const routes = express_1.Router();
exports.routes = routes;
const userController = new UserController_1.UserController();
routes.get("/", userController.list);
routes.get("/:name", userController.choices);
//# sourceMappingURL=routes.js.map