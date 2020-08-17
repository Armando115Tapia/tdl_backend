import tempHumModel from './temphum.model';

export const createTempHumSer = async (tempHumValue: any) => {
  const tempHumCreate = await tempHumModel.create(tempHumValue);
  await tempHumCreate.save();
  return tempHumCreate;
};

export const getValuesHumtempSer = async () => {
  const values = await tempHumModel.find();
  return values;
};
