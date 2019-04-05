import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import { Session ,Category} from "../entity";

export class CategoryController extends DefaultController {
    protected initializeRoutes(): Router {
        const router = Router();

        //get all categories
        router.route("/api/category").get((req: Request, res: Response) => {
            const categoryRepo = getRepository(Category);
            categoryRepo.find().then((categories: Category[]) => {
              res.status(200).send({ categories });
            });
          });

        return router;
    }
}

export default CategoryController;