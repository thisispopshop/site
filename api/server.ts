import cors from "cors";
import express, {Request,Response} from "express";
import { LoginController, UserController, CategoryController, OccasionController, ColorController } from "./controller";

import { DBConnection } from "./connection";
import ProductController from "./controller/product.controller";
import CollectionController from "./controller/collection.controller";
import EventController from "./controller/event.controller";
import OrganizationController from "./controller/organization.controller";

export class Server {
  private myApp: Promise<express.Application>;
  constructor() {
    this.myApp = this.buildServer();
  }
  public getMyApp(): Promise<express.Application> {
    return this.myApp;
  }
  protected buildServer(): Promise<express.Application> {
    return DBConnection.getConnection().then(() => {
      const app: express.Application = express();

      app.use(cors());

      /*
      app.use(function(req:Request, res:Response, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
      */
      app.use(express.json());
      app.use(express.static("public"));

      app.use("/", new UserController().router);
      app.use("/", new LoginController().router);
      app.use("/", new ProductController().router);
      app.use("/", new CollectionController().router);
      app.use("/", new CategoryController().router);
      app.use("/", new ColorController().router);
      app.use("/", new OccasionController().router);
      app.use("/", new EventController().router);
      app.use("/", new OrganizationController().router);

      return app;
    })
  }

}

export default Server;
