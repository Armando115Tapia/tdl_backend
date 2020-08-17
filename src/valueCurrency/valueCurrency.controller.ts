import { Request, Response } from 'express';
import { storeValueSer, getValuesSer } from './valueCurrency.service';
import valueCurrencyI from '../interfaces/valueCurrency';

export const storeValueCont = async (req: Request, res: Response) => {
  const body: valueCurrencyI = req.body;
  console.log(body);
  let valueCurrency = await storeValueSer(body);
  res.send({ msm: 'ok', valueCurrency });
};

export const getValuesCont = async (req: Request, res: Response) => {
  const values = await getValuesSer();
  res.send({ msm: 'ok', values });
};
