import express from "express";
import { Server } from "../../server";

export default class ServerConfig {

  public static getApplication(): Promise<express.Application> {
    if (ServerConfig.server) {
      return ServerConfig.server;
    } else {
      return new Server().getMyApp();
    }
  }

  private static server: Promise<express.Application>;
}
