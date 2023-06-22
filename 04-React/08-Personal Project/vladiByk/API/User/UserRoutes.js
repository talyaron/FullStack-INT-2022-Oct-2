"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
const UserController_1 = require("./UserController");
const userCookie_1 = require("../middleware/userCookie");
userRouter.route("/").get(UserController_1.getAllUsers).post(UserController_1.createUser, userCookie_1.setUserCookie);
userRouter.route("/getUser").get(UserController_1.getUser);
userRouter.route("/confirmUser").post(UserController_1.confirmUser, userCookie_1.setUserCookie);
userRouter.route("/userPurchase").post(UserController_1.userPurchase);
userRouter.route("/clearUserCookie").delete(UserController_1.clearUserCookie);
exports.default = userRouter;
