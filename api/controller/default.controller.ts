import { Router } from "express";
import { Connection } from "typeorm";
import { DBConnection } from "../connection";

export default abstract class DefaultController {
  public router: Router;

  constructor() {
    this.router = this.initializeRoutes();
  }

  protected abstract initializeRoutes(): Router;
}
