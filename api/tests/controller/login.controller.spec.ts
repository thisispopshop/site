import express from "express";
import request from "supertest";
import { Connection } from "typeorm";
import { DBConnection } from "../../connection";
import { User } from "../../entity";
import { Server } from "../../server";
import DBUtils from "../util/database";

import { getConnection } from "typeorm";

describe("/login", () => {
  let app: express.Application;
  let connection: Connection;

  beforeAll(async () => {
    app = await new Server().getMyApp();
    connection = getConnection();
    await connection.synchronize();
    await DBUtils.clearDB();
  });

  afterAll(async () => {
    await DBConnection.closeConnection();
  });

  test("should login successfully", done => {
    connection.manager.insert(User, {
      emailAddress: "test@test.com",
      firstName: "test",
      lastName: "test",
      password: "password"
    }).then(() => {
      request(app)
        .post("/login")
        .send({ emailAddress: "test@test.com", password: "password" })
        .expect(200)
        .then((res: request.Response) => {
          expect(res.body.token).toBeDefined();
          done();
        });
    });
  });
});
