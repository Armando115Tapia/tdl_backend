import { Request, Response, NextFunction } from 'express';
import { storeValueSer } from './valueCurrency.service';
import valueCurrencyI from '../interfaces/valueCurrency';

export const storeValueCont = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body: valueCurrencyI = req.body;
  let valueCurrency = await storeValueSer(body);
  res.send({ msm: 'ok', valueCurrency });
};
