import DefaultController from "./default.controller";

import express, { Request, Response } from "express";
import { getRepository } from "typeorm";

import { Session, User } from "../entity";

export class LoginController extends DefaultController {
  protected initializeRoutes(): express.Router {
    const router = express.Router();

    router.route("/login").post((req: Request, res: Response) => {
      const { emailAddress, password } = req.body;
      const userRepo = getRepository(User);
      const sessionRepo = getRepository(Session);
      userRepo
        .findOne({ where: { emailAddress } })
        .then((user: User | undefined) => {
          console.log("found user:", user);
          if (user && user.password === password) {
            sessionRepo
              .findOne({ where: { userId: user.id } })
              .then((session: Session | undefined) => {
                const expiry = new Date(new Date().getTime() + 60000 * 30);
                if (!session) {
                  session = new Session();
                  session.user = user;
                }
                session.expiresAt = expiry;
                sessionRepo.save(session).then(updatedSession => {
                  res
                    .status(200)
                    .send({ token: updatedSession.id, userId: user.id });
                });
              });
          } else {
            res
              .status(401)
              .send({
                error: "can't find user with that username or password"
              });
          }
        });
    });
    router.route("/logout").post((req: Request, res: Response) => {
      const token = req.get("token");
      const sessionRepo = getRepository(Session);
      sessionRepo.findOne(token).then((foundSession: Session | undefined) => {
        if (foundSession) {
          sessionRepo.remove(foundSession).then(() => {
            res.status(200).send({ loggedOut: true });
          });
        } else {
          res.status(200).send({ loggedOut: true });
        }
      });
    });
    return router;
  }
}

export default LoginController;
