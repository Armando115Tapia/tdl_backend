import { Request, Response } from 'express';
import { createTempHumSer, getValuesHumtempSer } from './temphum.service';

export const storeTempHumCont = async (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);
  let tempHum = await createTempHumSer(body);
  res.send({ msm: 'ok', tempHum });
};

export const getTempHumCont = async (req: Request, res: Response) => {
  const values = await getValuesHumtempSer();
  res.send({ msm: 'ok', values });
};
