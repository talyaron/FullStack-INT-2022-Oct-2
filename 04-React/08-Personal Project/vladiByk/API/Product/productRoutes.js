"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productRouter = express_1.default.Router();
const productController_1 = require("./productController");
productRouter.route("/").get(productController_1.getAllProducts).post(productController_1.createProduct);
productRouter.route("/:id").get(productController_1.getProduct);
exports.default = productRouter;
