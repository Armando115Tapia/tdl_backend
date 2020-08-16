import { Router, Response, Request } from 'express';
import { storeValueCont } from '../valueCurrency/valueCurrency.controller';

const router = Router();
router.post('/value', storeValueCont);

export default router;
