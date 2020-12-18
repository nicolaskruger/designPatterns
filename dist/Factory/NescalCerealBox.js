"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Nescal_1 = require("../model/Nescal");
const CerealBox_1 = require("./CerealBox");
class NescalCerealBox extends CerealBox_1.CerealBox {
    cereal() {
        return new Nescal_1.Nescal();
    }
}
exports.NescalCerealBox = NescalCerealBox;
//# sourceMappingURL=NescalCerealBox.js.map