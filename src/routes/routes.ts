import { Router } from 'express';
import {
  storeValueCont,
  getValuesCont,
} from '../valueCurrency/valueCurrency.controller';

import {
  getTempHumCont,
  storeTempHumCont,
} from '../temphum/temphum.controller';
const router = Router();
router.post('/value', storeValueCont);
router.get('/value', getValuesCont);
router.get('/tempHum', getTempHumCont);
router.post('/tempHum', storeTempHumCont);

export default router;
