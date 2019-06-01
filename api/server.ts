import express, {Request, Response} from "express";
import { DBConnection } from "./connection";

//session imports
import session from "express-session";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
//import path from "path";

//user auth imports (okta oidc)
import okta, {User} from "@okta/okta-sdk-nodejs";
import {ExpressOIDC} from "@okta/oidc-middleware";

// rest api imports
import { LoginController, UserController} from "./controller";
import {ProductController, CollectionController, EventController, OrganizationController } from "./controller";
import {CategoryController, OccasionController, ColorController, BrandController } from "./controller";

export class Server {
  private myApp: Promise<express.Application>;
  constructor() {
    this.myApp = this.buildServer();
  }
  public getMyApp(): Promise<express.Application> {
    return this.myApp;
  }
  protected buildServer(): Promise<express.Application> {
    return DBConnection.getConnection().then(() => {
      const app: express.Application = express();

      // oid communication & routing
      const oktaClient = new okta.Client({
        orgUrl: "https://dev-181223.okta.com",
        token: "00MpZz3QRB9OEXWt2nLAnDv19an_lrQ3RvmCbftg3t",
      });
      const oidc = new ExpressOIDC({
        issuer: "https://dev-181223.okta.com/oauth2/default",
        //client id and secret from popshop local
        client_id: "0oanzd6ozu2jgsvC6356",
        client_secret: "bwhRc4GodXNUlx1AxCRcPBQXj0K-W9WvQit8dL3s",
        appBaseUrl: "http://admin.localhost:8080",
        redirect_url: "http://admin.localhost:8080/users/callback",
        scope: "openid profile",
        routes: {
          login: {
            path: "/users/login"
          },
          callback: {
            path: "/users/callback",
            defaultRedirect: "/adminHome"
          }
        }
      });

      app.use(cors());
      app.use(express.json());
      app.use(express.static("public"));
      //app.use(express.static(path.join(__dirname,'public)));
      app.use(logger('dev'));
      app.use(express.urlencoded({extended:false}));
      app.use(cookieParser());

      // using the express ession library
      app.use(session({
        secret:'skdfjkioqiwuenvsdfkjwoeiufinslkdjjfie',
        resave: true,
        saveUninitialized: false
      }));
      app.use(oidc.router);

      //this middleware will run on every user request
      app.use((req:Request, res:Response) => {
        if (!req.body.userinfo) {
          console.log("no user info?")
        }
        oktaClient.getUser(req.body.userinfo.sub)
        //oktaUserclass?
          .then((user) => {
            req.body.user = user;
            req.body.locals.user = user;
            console.log(user)
          }).catch((err: Response) => {
            console.log(err)
          });
      });

      //test user stuff
      app.get('/test', (req, res) => {
        res.json({ profile: req.body.user ? req.body.user.profile : null });
      });

      // wont let user access unless logged in
      
      function loginRequired(req:Request, res:Response) {
        if (!req.body.user) {
          return res.status(401).render("unauthenticated");
        }
      }

      //rest api
      app.use("/", new UserController().router);
      app.use("/", new LoginController().router);
      app.use("/", new ProductController().router);
      app.use("/", new CollectionController().router);
      app.use("/", new CategoryController().router);
      app.use("/", new ColorController().router);
      app.use("/", new BrandController().router);
      app.use("/", new OccasionController().router);
      app.use("/", new EventController().router);
      app.use("/", loginRequired, new OrganizationController().router);

      return app;
    })
  }

}

export default Server;
