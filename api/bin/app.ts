import express from "express";
import Server from "../server";

new Server().getMyApp().then((app: express.Application) => {
  app.listen(3000, () => {
    console.log("now listening on port 3000");
  });
});
