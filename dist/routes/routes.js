"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var valueCurrency_controller_1 = require("../valueCurrency/valueCurrency.controller");
var router = express_1.Router();
router.post('/value', valueCurrency_controller_1.storeValueCont);
exports.default = router;
