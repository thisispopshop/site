import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import { getRepository, } from "typeorm";
import { Session , Organization} from "../entity";

export class OrganizationController extends DefaultController {
    protected initializeRoutes(): Router {
        const router = Router();

        //get all organizations
        router.route("/api/organization").get((req: Request, res: Response) => {
            const organizationRepo = getRepository(Organization);
            organizationRepo.find().then((organizations: Organization[]) => {
              res.status(200).send({ organizations });
            });
          });

        //get an organization
        router.route("/api/organization/:id").get((req: Request, res: Response) => {
          const organizationRepo = getRepository(Organization);
          const id = parseInt(req.params.id);

          organizationRepo.findOne(id).then((foundOrganization: Organization | undefined) => {
            if (foundOrganization){
              res.status(200).send({organization:foundOrganization});
            } else {
              (reason:any) => {
                res.status(404).send({reason:"Organization not found."});
              }
            }
          }, () => {
            res.sendStatus(500);
          })
        });

        //create an organization
        router.route("/api/organization").post((req:Request, res:Response) => {
          const organizationRepo = getRepository(Organization);
          
          const newOrganization = new Organization();
          newOrganization.name = req.body.name;
          newOrganization.subdomain = req.body.subdomain;
          if (req.body.events) newOrganization.events = req.body.events;

          organizationRepo.save(newOrganization).then(createdOrganization  => {
              res.status(200).send({organization:createdOrganization});
          }, () => {
            res.sendStatus(500);
          });
        });

        //update an organization
        router.route("/api/organization/:id").put((req:Request, res:Response) => {
          const organizationRepo = getRepository(Organization);
          const id = parseInt(req.params.id);

          organizationRepo.findOne(id).then((foundOrganization: Organization | undefined) => {
            if (foundOrganization){
              foundOrganization.name = req.body.name;
              foundOrganization.subdomain = req.body.subdomain;
              if (req.body.events) foundOrganization.events = req.body.events;      
              
              organizationRepo.save(foundOrganization).then(updatedOrganization => {
                res.status(200).send({organization: updatedOrganization});
              })
            } else {
              (reason:any) => {
                res.status(404).send({reason:"Organization not found."})
              }
            }
          }, () => {
            res.sendStatus(500);
          });
        });

        return router;
    }
}

export default OrganizationController;