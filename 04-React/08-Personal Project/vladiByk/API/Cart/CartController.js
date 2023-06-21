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
exports.getCart = exports.deleteProduct = exports.updateCart = exports.createCart = exports.getAllCarts = void 0;
const CartModel_1 = __importDefault(require("./CartModel"));
const UserModel_1 = __importDefault(require("../User/UserModel"));
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const secret = process.env.JWT_SECRET;
const getAllCarts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carts = yield CartModel_1.default.find({});
        res.status(200).json({ ok: true, carts });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.getAllCarts = getAllCarts;
const createCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield CartModel_1.default.create({});
        res.status(200).json({ ok: true, cart });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.createCart = createCart;
const updateCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product, cartId, qty } = req.body;
        const cart = yield CartModel_1.default.findById(cartId);
        if (!cart)
            return;
        const productExists = cart === null || cart === void 0 ? void 0 : cart.cart.find((productItem) => productItem._id === product._id);
        if (productExists)
            yield CartModel_1.default.updateOne({
                _id: cartId,
                cart: { $elemMatch: { _id: product._id } },
            }, {
                $inc: { "cart.$.qty": qty },
            });
        else {
            cart.cart.push(Object.assign(Object.assign({}, product), { qty }));
        }
        yield cart.save();
        res.status(200).json({ ok: true, cart });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.updateCart = updateCart;
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        if (!secret)
            throw new Error("Missing jwt secret");
        const { userId } = req.cookies;
        if (!userId)
            throw new Error("Missing token from cookise");
        const decodedToken = jwt_simple_1.default.decode(userId, secret);
        const user = yield UserModel_1.default.findById(decodedToken.userId).populate("carts");
        const findActiveCart = user === null || user === void 0 ? void 0 : user.carts.find((cart) => cart.isActive === true);
        if (!findActiveCart)
            return;
        const cartId = findActiveCart._id;
        const cart = yield CartModel_1.default.findById(cartId);
        if (!cart)
            return;
        const filterCart = cart.cart.filter((product) => product._id !== productId);
        cart.cart = [...filterCart];
        yield cart.save();
        res.status(200).json({ ok: true, cart });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.deleteProduct = deleteProduct;
const getCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const cart = yield CartModel_1.default.findById(id);
        res.status(200).json({ ok: true, cart });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.getCart = getCart;
