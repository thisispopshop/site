import express from "express";
import request from "supertest";
import { Connection } from "typeorm";
import { DBConnection } from "../../connection";
import { User } from "../../entity";
import { Server } from "../../server";
import DBUtils from "../util/database";

describe("/users", () => {
  let myApp: express.Application;
  let connection: Connection;

  const createUser = (
    emailAddress: string,
    conn: Connection
  ): Promise<User> => {
    const user = new User();
    user.emailAddress = emailAddress;
    user.firstName = "testUser";
    user.lastName = "testUser";
    user.password = "password";
    return conn.getRepository(User).save(user);
  };

  beforeAll(async () => {
    myApp = await new Server().getMyApp();
    connection = await DBConnection.getConnection();
    await connection.synchronize();
  });

  beforeEach(async () => {
    await DBUtils.clearDB();
  });

  afterAll(async () => {
    DBConnection.closeConnection();
  });

  describe("GET '/'", () => {
    test("should return an empty list because there isn't anything in the database", done => {
      request(myApp)
        .get("/users")
        .then((response: request.Response) => {
          expect(response.body).toEqual({ users: [] });
          done();
        });
    });
    test("should return one user", done => {
      const email = "test@test.com";
      return createUser(email, connection).then((createdUser: User) => {
        return request(myApp)
          .get("/users")
          .expect(200)
          .then((response: request.Response) => {
            expect(
              response.body.users && response.body.users.length
            ).toEqual(1);
            expect(response.body.users[0].emailAddress).toEqual(email);
            done();
          });
      });
    });
  });
  describe("POST '/'", () => {
    test("should create a user", done => {
      const email = `test${new Date().getTime()}@test.com`;
      return request(myApp)
        .post("/users")
        .send({
          emailAddress: email,
          firstName: "test",
          lastName: "test",
          password: "password",
        })
        .then((response: request.Response) => {
          expect(response.body.user.emailAddress).toEqual(email);
          done();
        });
    });
  });
});
