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
exports.setUserCookie = void 0;
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const secret = process.env.JWT_SECRET;
const setUserCookie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!secret)
            throw new Error("Missing jwt secret");
        const user = req.body;
        const token = jwt_simple_1.default.encode({ userId: user._id, role: "public" }, secret);
        if (!token)
            throw new Error("Missing token...");
        res.cookie("userId", token, {
            httpOnly: true,
        });
        res.status(200).json({ ok: true, user });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
exports.setUserCookie = setUserCookie;
