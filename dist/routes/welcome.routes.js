"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcomeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const welcome_controllers_1 = require("../controllers/welcome.controllers");
const router = express_1.default.Router();
router.get("/", welcome_controllers_1.welcomeControllers.welcome);
exports.welcomeRoutes = router;
