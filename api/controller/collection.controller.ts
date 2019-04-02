import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import multer from "multer";
import Path from "path";

import { getRepository } from "typeorm";
import { Session, User } from "../entity";

export class CollectionController extends DefaultController {
    protected initializeRoutes(): Router {
        const router = Router();

        //router.route("/api/collection").get((req:Reqest, res:Response) => {})
        //get, post, put, delete

        return router;
    }
}

export default CollectionController;