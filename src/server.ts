import express, { Application } from 'express';
import mongoose from 'mongoose';
class Server {
  private static _instance: Server;
  public app: Application;

  private constructor() {
    this.app = express();
    this.connectToTheDatabase();
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  private async connectToTheDatabase() {
    try {
      const dataBaseconnect = await mongoose.connect(
        // `mongodb://192.168.100.243:27017/database_tdl`,
        `mongodb://Armandev:Armas1350_epis@ds137271.mlab.com:37271/todolegal`,
        {
          useNewUrlParser: true,
          useFindAndModify: false,
          useUnifiedTopology: true,
        }
      );
    } catch (e) {
      console.log(e);
    }
  }
  public start() {
    this.app.listen(5000, () => {
      console.log('App running on: ', 5000);
    });
  }
}

export default Server;
