import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import { Session , Organization} from "../entity";

export class OrganizationController extends DefaultController {
    protected initializeRoutes(): Router {
        const router = Router();

        //get all categories
        router.route("/api/organization").get((req: Request, res: Response) => {
            const categoryRepo = getRepository(Organization);
            categoryRepo.find().then((organizations: Organization[]) => {
              res.status(200).send({ organizations });
            });
          });

        return router;
    }
}

export default OrganizationController;