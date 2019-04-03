import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import { Session, User, Product, Collection, CollectionStatus } from "../entity";

export class CollectionController extends DefaultController {
    protected initializeRoutes(): Router {
        const router = Router();

        //create a new collection
        router.route("/api/collection").post((req:Request, res:Response) => {

            const productRepo = getRepository(Product);
            const productIds = req.body.productIds;
            
            productRepo
                .createQueryBuilder("product")
                .where("product.id IN (:productIds)", {productIds})
                .getMany()
                .then((foundProducts : Product[]) => {

                    //console.log(productIds);
                    //console.log(foundProducts);

                    //create a new collection
                    const newCollection = new Collection();
                    newCollection.name = req.body.name;
                    newCollection.status = CollectionStatus.UNAPPROVED;     
                    newCollection.approvedBy = -1;               //idk yet?
                    newCollection.description = req.body.description;
                    newCollection.products = foundProducts;

                    console.log(newCollection);
                    
                    const collectionRepo = getRepository(Collection);
                    collectionRepo.save(newCollection)
                        .then((createdCollection:Collection) => {
                            res.status(200).send({newCollection:createdCollection});
                            //productRepo.save(product_list);
                        }, 
                        (reason:any) => {
                            console.log(reason);
                            res.sendStatus(500);
                        });
                })
        });

        router.route("/api/collection").get((req:Request, res:Response) => {
            const collectionRepo = getRepository(Collection);
            collectionRepo.find().then((collections: Collection[]) => {
              res.status(200).send({ collections });
            });
        });

        return router;
    }
}

export default CollectionController;