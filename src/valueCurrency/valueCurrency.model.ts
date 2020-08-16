import * as mongoose from 'mongoose';
const valueCurrencySchema = new mongoose.Schema({
  date: String,
  value: String,
});

const valueCurrencyModel = mongoose.model('Value', valueCurrencySchema);
export default valueCurrencyModel;
