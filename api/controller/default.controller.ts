import { Router } from "express";
import { Connection } from "typeorm";
import { DBConnection } from "../connection";
import { NextFunction } from "connect";

export default abstract class DefaultController {
  public router: Router;

  constructor() {
    this.router = this.initializeRoutes();
  }

  protected abstract initializeRoutes(): Router;

  //middleware to ensure that a user is logged in
  /*
  protected loginRequired() {
    if (!req.user) {
      return res.status(401).render("unauthenticated")
    }
    next();
  }
  */
}
