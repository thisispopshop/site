import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import { Session ,Product} from "../entity";

export class ProductController extends DefaultController {
    protected initializeRoutes(): Router {
        const router = Router();

        //get all products
        router.route("/api/product").get((req: Request, res: Response) => {
            const productRepo = getRepository(Product);
            productRepo.find().then((products: Product[]) => {
              res.status(200).send({ products });
            });
          });

          //post

        return router;
    }
}

export default ProductController;