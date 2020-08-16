import express, { Application } from 'express';
class Server {
  private static _instance: Server;
  public app: Application;

  private constructor() {
    this.app = express();
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  public start() {
    this.app.listen(5000, () => {
      console.log('App running on: ', 5000);
    });
  }
}

export default Server;
