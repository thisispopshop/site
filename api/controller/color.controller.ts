import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import { Session ,Color} from "../entity";

export class ColorController extends DefaultController {
    protected initializeRoutes(): Router {
        const router = Router();

        //get all color
        router.route("/api/color").get((req: Request, res: Response) => {
            const colorRepo = getRepository(Color);
            colorRepo.find().then((colors: Color[]) => {
              res.status(200).send({ colors });
            });
          });

        //get a color
        router.route("/api/color/:id").get((req: Request, res: Response) => {
            const colorRepo = getRepository(Color);
            const id = parseInt(req.params.id);
            colorRepo.findOne(id).then((foundColor: Color | undefined) => {
                if (foundColor) res.status(200).send({ color: foundColor});
                else (reason:any) => {
                    res.status(404).send({reason: "Color not found."});
                }
            });
          });

        //add a color
        router.route("/api/color").post((req:Request, res:Response) => {
            const colorRepo = getRepository(Color);
            const newColor = new Color;
            newColor.name = req.body.name;
            colorRepo.save(newColor).then((createdColor: Color) => {
                res.status(200).send({color:createdColor});
            }, () => {
                res.sendStatus(500);
            });
        });

        return router;
    }
}

export default ColorController;