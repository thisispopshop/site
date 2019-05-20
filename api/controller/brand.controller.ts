import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import { Session ,Brand} from "../entity";

export class BrandController extends DefaultController {
    protected initializeRoutes(): Router {
        const router = Router();

        //get all categories
        router.route("/api/brand").get((req: Request, res: Response) => {
            const brandRepo = getRepository(Brand);
            brandRepo.find().then((brands: Brand[]) => {
              res.status(200).send({ brands });
            });
          });

        //get one brand
        router.route("/api/brand/:id").get((req:Request, res:Response) => {
          const brandRepo = getRepository(Brand);
          const id = parseInt(req.params.id);
          brandRepo.findOne(id).then((foundBrand:Brand | undefined) => {
            if (foundBrand) res.status(200).send({brand:foundBrand});
            else (reason:any) =>  {res.status(404).send({reason: "brand not found."})}
          });
        });

        //create a brand
        router.route("/api/brand").post((req:Request, res:Response) => {
          const brandRepo = getRepository(Brand);
          const newBrand = new Brand();
          newBrand.name = req.body.name;
          brandRepo.save(newBrand).then(createdBrand => {
            res.status(200).send({brand:createdBrand});
          }, () => {
            res.sendStatus(500);
          });
        });

        return router;
    }
}

export default BrandController;