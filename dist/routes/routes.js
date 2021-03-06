"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var valueCurrency_controller_1 = require("../valueCurrency/valueCurrency.controller");
var temphum_controller_1 = require("../temphum/temphum.controller");
var router = express_1.Router();
router.post('/value', valueCurrency_controller_1.storeValueCont);
router.get('/value', valueCurrency_controller_1.getValuesCont);
router.get('/tempHum', temphum_controller_1.getTempHumCont);
router.post('/tempHum', temphum_controller_1.storeTempHumCont);
exports.default = router;
