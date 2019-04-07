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

        //get one category
        router.route("/api/category/:id").get((req:Request, res:Response) => {
          const categoryRepo = getRepository(Category);
          const id = parseInt(req.params.id);
          categoryRepo.findOne(id).then((foundCategory:Category | undefined) => {
            if (foundCategory) res.status(200).send({category:foundCategory});
            else (reason:any) =>  {res.status(404).send({reason: "Category not found."})}
          });
        });

        //create a category
        router.route("/api/category").post((req:Request, res:Response) => {
          const categoryRepo = getRepository(Category);
          const newCategory = new Category;
          newCategory.name = req.body.name;
          categoryRepo.save(newCategory).then(createdCategory => {
            res.status(200).send({category:createdCategory});
          }, () => {
            res.sendStatus(500);
          });
        });

        return router;
    }
}

export default CategoryController;