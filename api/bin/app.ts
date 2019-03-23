import express, {Request, Response} from "express";
import Server from "../server";

new Server().getMyApp().then((app: express.Application) => {

  /*
  app.get("/", (req:Request, res:Response) => {
    res.send("hey");
  })*/

  app.listen(3000, () => {
    console.log("now listening on port 3000");
  });

});
