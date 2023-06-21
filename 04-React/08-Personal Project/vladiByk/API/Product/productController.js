"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.createProduct = exports.getAllProducts = void 0;
const ProductModel_1 = __importDefault(require("./ProductModel"));
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield ProductModel_1.default.find({});
        res.status(200).json({ ok: true, products });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.getAllProducts = getAllProducts;
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, imgUrl, price } = req.body;
        const product = yield ProductModel_1.default.create({ name, imgUrl, price });
        res.status(200).json({ ok: true, product });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.createProduct = createProduct;
const getProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield ProductModel_1.default.findById(id);
        res.status(200).json({ ok: true, product });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.getProduct = getProduct;
