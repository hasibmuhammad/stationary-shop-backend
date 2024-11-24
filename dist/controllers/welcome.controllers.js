"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcomeControllers = void 0;
const welcome = (req, res) => {
    console.log(req.method);
    res
        .status(200)
        .json({ message: "Welcome to stationary shop backend", success: true });
};
exports.welcomeControllers = { welcome };
