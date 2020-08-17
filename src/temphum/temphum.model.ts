import * as mongoose from 'mongoose';
import valueCurrencyModel from '../valueCurrency/valueCurrency.model';
const tempHumSchema = new mongoose.Schema({
  temperature: Number,
  humidity: Number,
});

const tempHumModel = mongoose.model('TempHum', tempHumSchema);
export default tempHumModel;
