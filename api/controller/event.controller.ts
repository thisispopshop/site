import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import { Session ,Event} from "../entity";

export class EventController extends DefaultController {
    protected initializeRoutes(): Router {
        const router = Router();

        //get all event
        router.route("/api/event").get((req: Request, res: Response) => {
            const eventRepo = getRepository(Event);
            eventRepo.find().then((events: Event[]) => {
              res.status(200).send({events});
            });
          });

        //get an event
        router.route('/api/event/:id').get((req:Request, res:Response) => {
            const eventRepo = getRepository(Event);
            const id = parseInt(req.params.id);

            eventRepo.findOne(id).then((foundEvent : Event | undefined ) => {
                if (foundEvent) {
                        res.status(200).send({foundEvent});
                }else {
                    res.status(400).send({reason: "Event not found"});
                })
                }
            })
        })

        return router;
    }
}

export default EventController;