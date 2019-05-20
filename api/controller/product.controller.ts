import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import { Session ,Product, Category, Color} from "../entity";

export class ProductController extends DefaultController {
    protected initializeRoutes(): Router {
        const router = Router();

        //create a product
        router.route("/api/product").post((req:Request, res:Response) => {
          const productRepo = getRepository(Product);
          const product = new Product()
          product.name = req.query.name;
          product.merchant = req.query.merchant;
          product.price = req.query.price;
          product.url = req.query.url;
          product.description = req.query.description;
          product.images = req.query.images;
          product.brand = req.query.brand;
          product.category = req.query.category;
          product.color = req.query.color;

          productRepo.save(product).then((newProduct: Product) => {
            res.status(200).send({product:newProduct})
          }, (reason:any) => {
            res.status(404).send({reason: "Failed to create product :("})
          })
        })

        //get all products
        router.route("/api/product").get((req: Request, res: Response) => {
            const productRepo = getRepository(Product);
              //build query here
              let query: any = {};
              if (req.query.category) query.category = req.query.category;
              if (req.query.color) query.color = req.query.color;
              if (req.query.tag) query.tag = req.query.tag;   //should search in product name

            productRepo.find({where:query}).then((products: Product[]) => {
              res.status(200).send({ products });
            });
          });

        //get one product
        router.route("/api/product/:id").get((req:Request, res:Response) => {
          const productRepo = getRepository(Product);
          const id = parseInt(req.params.id);

          productRepo.findOne(id).then((foundProduct: Product | undefined) => {
            if (foundProduct) res.status(200).send({product:foundProduct});
            else (reason:any) => { res.status(404).send({reason:"Product not found."})}
          }, () => { 
            res.sendStatus(500);
          })
        });

        //update a product (color)
        router.route("/api/product/:id").put((req:Request, res:Response) => {
          const productRepo = getRepository(Product);
          const id = parseInt(req.params.id);

          productRepo.findOne(id).then((foundProduct:Product | undefined) => {
            if (foundProduct) {
              foundProduct.color = req.body.color;
              foundProduct.category = req.body.category;
              foundProduct.brand = req.body.brand;

              productRepo.save(foundProduct).then(updatedProduct => {
                res.status(200).send({product:updatedProduct});
              })
            } else {
              (reason:any) => {
                res.status(404).send({reason:"Product not found"})
              }
            }
          }, () => {
            res.sendStatus(500);
          });
        });

        return router;
    }
}

export default ProductController;