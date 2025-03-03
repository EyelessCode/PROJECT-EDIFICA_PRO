"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4500;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/test', (req, res) => {
    res.send('Hello World');
});
app.listen(PORT, () => console.log(`LISTENING IN ${PORT} PORT!`));
//# sourceMappingURL=app.js.map