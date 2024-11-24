"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const db_1 = __importDefault(require("./config/db"));
dotenv_1.default.config();
const port = process.env.PORT || 5001;
(0, db_1.default)()
    .then(() => {
    app_1.default.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
})
    .catch((error) => {
    console.log("Failed to connect mongodb or start the server!", error);
    process.exit(1);
});
