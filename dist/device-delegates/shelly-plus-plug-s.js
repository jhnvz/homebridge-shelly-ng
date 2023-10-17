"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellyPlusPlugSDelegate = void 0;
const shellies_ng_1 = require("shellies-ng");
const base_1 = require("./base");
/**
 * Handles Shelly Plus Plug US devices.
 */
class ShellyPlusPlugSDelegate extends base_1.DeviceDelegate {
    setup() {
        const d = this.device;
        this.addSwitch(d.switch0, { single: true });
    }
}
exports.ShellyPlusPlugSDelegate = ShellyPlusPlugSDelegate;
base_1.DeviceDelegate.registerDelegate(ShellyPlusPlugSDelegate, shellies_ng_1.ShellyPlusPlugS);
//# sourceMappingURL=shelly-plus-plug-s.js.map