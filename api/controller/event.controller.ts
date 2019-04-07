import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import { Session ,Event} from "../entity";

export class EventController extends DefaultController {
    protected initializeRoutes(): Router {
        const router = Router();

        //get all events
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
                        res.status(200).send({event:foundEvent});
                }else {
                    res.status(400).send({reason: "Event not found"});
                }
            })
        });

        //create an event
        router.route("/api/event").post((req:Request, res:Response) => {
            const eventRepo = getRepository(Event);
            const newEvent = new Event();
            newEvent.name = req.body.name;
            newEvent.description = req.body.description;
            newEvent.occasions = req.body.occasions;
            newEvent.organization = req.body.organization;

            eventRepo.save(newEvent).then((createdEvent:Event) => {
                res.status(200).send({event: createdEvent});
            }, 
            (reason:any) => {
                //console.log(reason);
                res.sendStatus(500);
            });
        })

        //update an event
        router.route("/api/event/:id").put((req:Request, res:Response) => {
            const eventRepo = getRepository(Event);
            const id = parseInt(req.params.id);

            eventRepo.findOne(id).then((foundEvent: Event | undefined) => {
                if (foundEvent){
                    foundEvent.name = req.body.name;
                    foundEvent.description = req.body.description;
                    foundEvent.occasions = req.body.occasions;
                    foundEvent.organization = req.body.organization;

                    console.log(req.body);
                    console.log(foundEvent);

                    eventRepo.save(foundEvent).then(updatedEvent => {
                        res.status(200).send({event:updatedEvent});
                    })
                } else {
                    (reason:any) => 
                        res.status(404).send({reason:"Event not found."});
                }
            },
                () => {
                    res.sendStatus(500);
            })
        })

        return router;
    }
}

export default EventController;