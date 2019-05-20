import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import { getRepository, Any, In } from "typeorm";
import { Session, User, Product, Collection, CollectionStatus, Category } from "../entity";

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

            newCollection.categories = newCollection.products.map((p:Product)=>{
                return p.category;
            })
            newCollection.brands = newCollection.products.map((p:Product) => {
                return p.brand;
            })
            newCollection.colors = newCollection.products.map((p:Product) =>{
                return p.color;
            })

            //console.log(newCollection);
            
            const collectionRepo = getRepository(Collection);
            collectionRepo.save(newCollection)
                .then((createdCollection:Collection) => {
                    console.log(createdCollection)
                    res.status(200).send({collection:createdCollection});
                    //productRepo.save(product_list);
                }, 
                (reason:any) => {
                    //console.log(reason);
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
            const productRepo = getRepository(Product);

            const id = parseInt(req.params.id);
            collectionRepo.findOne(id).then((foundCollection:Collection | undefined) => {
                if (foundCollection){

                    //if you need to query ...
                    if (req.query.categories && req.query.brands){
                        const productIds = foundCollection.products.map((product:Product)=>{return product.id})
                        let selectedCategoryIds : number[] = [];
                        selectedCategoryIds = req.query.categories.split(',').map((cat:number) => {return Number(cat)});
                        let selectedBrandIds : number[] = [];
                        selectedBrandIds = req.query.brands.split(',').map((bran:number) => {return Number(bran)});
                        productRepo.find({
                                id: In(productIds),
                                category: In(selectedCategoryIds),
                                brand: In(selectedBrandIds)
                            }).then((products:Product[])=> {
                                foundCollection.products = products
                                res.status(200).send({collection:foundCollection})
                            }).catch((reason:any)=>{console.log(reason)})
                    } else if (req.query.categories && !req.query.brands) {
                        const productIds = foundCollection.products.map((product:Product)=>{return product.id})
                        let selectedCategoryIds : number[] = [];
                        selectedCategoryIds = req.query.categories.split(',').map((cat:number) => {return Number(cat)});
                        productRepo.find({
                                id: In(productIds),
                                category: In(selectedCategoryIds)
                            }).then((products:Product[])=> {
                                foundCollection.products = products
                                res.status(200).send({collection:foundCollection})
                            }).catch((reason:any)=>{console.log(reason)})                  
                    } else if (req.query.brands && !req.query.categories ){
                        const productIds = foundCollection.products.map((product:Product)=>{return product.id})
                        let selectedBrandIds : number[] = [];
                        selectedBrandIds = req.query.brands.split(',').map((bran:number) => {return Number(bran)});
                        productRepo.find({
                                id: In(productIds),
                                brand: In(selectedBrandIds)
                            }).then((products:Product[])=> {
                                foundCollection.products = products
                                res.status(200).send({collection:foundCollection})
                            }).catch((reason:any)=>{console.log(reason)})
                    }
                    //send all of them...
                    else 
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
            const categoryRepo = getRepository(Category);
            const id = parseInt(req.params.id);

            collectionRepo.findOne(id).then((foundCollection:Collection | undefined) => {
                if (foundCollection){
                    //make the changes if they exist
                    if (req.body.name) { foundCollection.name = req.body.name };
                    if (req.body.description) { foundCollection.description = req.body.description };
                    if (req.body.status) { foundCollection.status = req.body.status };
                    //if (req.body.approvedBy)....
                    if (req.body.products) { foundCollection.products = req.body.products };
                    //if (req.body.categories) { foundCollection.categories = req.body.categories};
                    //if (req.body.brands) { foundCollection.brands = req.body.brands}

                    foundCollection.categories = foundCollection.products.map((p:Product)=>{
                        return p.category;
                    })
                    foundCollection.brands = foundCollection.products.map((p:Product) => {
                        return p.brand;
                    })
                    foundCollection.colors = foundCollection.products.map((p:Product) =>{
                        return p.color;
                    })

                    //update it in database
                    collectionRepo.save(foundCollection).then(updatedCollection => {
                        console.log(updatedCollection)
                        res.status(200).send({collection:updatedCollection})
                    }) 
                } 
                else {
                    (reason:any) => 
                        res.status(404).send({error:"Collection Not Found"});
                }
            },
            () => {
                res.sendStatus(500);
            })
        });

        return router;
    }
}

export default CollectionController;