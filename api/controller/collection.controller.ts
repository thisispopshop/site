import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import { Session, User, Product, Collection, CollectionStatus } from "../entity";

export class CollectionController extends DefaultController {
    protected initializeRoutes(): Router {
        const router = Router();

        //create a new collection
        router.route("/api/collection").post((req:Request, res:Response) => {

            //create a new collection
            const newCollection = new Collection();
            newCollection.name = req.body.name;
            newCollection.status = CollectionStatus.UNAPPROVED;     
            newCollection.approvedBy = -1;               //idk yet?
            newCollection.description = req.body.description;
            newCollection.products = req.body.products;
            console.log(newCollection);
            
            const collectionRepo = getRepository(Collection);
            collectionRepo.save(newCollection)
                .then((createdCollection:Collection) => {
                    res.status(200).send({collection:createdCollection});
                    //productRepo.save(product_list);
                }, 
                (reason:any) => {
                    console.log(reason);
                    res.sendStatus(500);
                });
        });

        //get all collections
        //add session?
        router.route("/api/collection").get((req:Request, res:Response) => {
            const collectionRepo = getRepository(Collection);
            collectionRepo.find().then((collections: Collection[]) => {
              res.status(200).send({ collections });
            });
        });


        //get a collection
        //add session?
        router.route("/api/collection/:id").get((req:Request, res:Response) => {
            const collectionRepo = getRepository(Collection);
            const id = parseInt(req.params.id);
            collectionRepo.findOne(id).then((foundCollection:Collection | undefined) => {
                if (foundCollection){
                    res.status(200).send({collection:foundCollection})
                } else {
                    (reason:any) => 
                        res.status(404).send({error:"Collection Not Found"});
                }
            })
        });

        //update collection 
        //add session?
        //add auth
        router.route("/api/collection/:id").put((req:Request, res:Response) => {
            const collectionRepo = getRepository(Collection);
            const productRepo = getRepository(Product);
            const id = parseInt(req.params.id);

            collectionRepo.findOne(id).then((foundCollection:Collection | undefined) => {
                if (foundCollection){

                    //make the changes if they exist
                    if (req.body.name) { foundCollection.name = req.body.name };
                    if (req.body.description) { foundCollection.description = req.body.description };
                    if (req.body.status) { foundCollection.status = req.body.status };
                    //if (req.body.approvedBy)....
                    if (req.body.products) { foundCollection.products = req.body.products };

                    res.status(200).send({collection:foundCollection})
                } 
                else {
                    (reason:any) => 
                        res.status(404).send({error:"Collection Not Found"});
                }
            })
        });

        return router;
    }
}

export default CollectionController;