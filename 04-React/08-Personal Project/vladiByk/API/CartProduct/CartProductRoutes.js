"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cartProductRouter = express_1.default.Router();
const CartProductController_1 = require("./CartProductController");
cartProductRouter.route("/").get(CartProductController_1.getAllCartProducts).post(CartProductController_1.createCartProduct);
cartProductRouter.route("/:id").get(CartProductController_1.getCartProduct);
cartProductRouter.route("/:updateCartProduct").patch(CartProductController_1.updateCartProduct);
exports.default = cartProductRouter;
