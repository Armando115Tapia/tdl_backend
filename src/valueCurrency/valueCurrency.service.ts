import valueCurrencyModel from './valueCurrency.model';
import valueCurrencyI from '../interfaces/valueCurrency';

export const storeValueSer = async (valueCurrency: valueCurrencyI) => {
  const valueCurrencyCreate = await valueCurrencyModel.create(valueCurrency);
  await valueCurrencyCreate.save();
  return valueCurrencyCreate;
};
