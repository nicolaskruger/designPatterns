"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sucrilhos_1 = require("../model/Sucrilhos");
const CerealBox_1 = require("./CerealBox");
class SucrilhosCerealBox extends CerealBox_1.CerealBox {
    cereal() {
        return new Sucrilhos_1.Sucrilhos();
    }
}
exports.SucrilhosCerealBox = SucrilhosCerealBox;
//# sourceMappingURL=SucrilhosCerealBox.js.map