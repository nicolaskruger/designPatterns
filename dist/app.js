"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NescalCerealBox_1 = require("./Factory/NescalCerealBox");
const SucrilhosCerealBox_1 = require("./Factory/SucrilhosCerealBox");
let cerealBox = new NescalCerealBox_1.NescalCerealBox();
cerealBox.giveCereal();
cerealBox = new SucrilhosCerealBox_1.SucrilhosCerealBox();
cerealBox.giveCereal();
//# sourceMappingURL=app.js.map