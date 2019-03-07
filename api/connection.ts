import { Connection, createConnection, getConnectionOptions } from "typeorm";
import connectionConfig from "./config.json";

export class DBConnection {
  public static getConnection(): Promise<Connection> {
    if (DBConnection.connection && DBConnection.connection.isConnected) {
      return Promise.resolve(DBConnection.connection);
    }
    return getConnectionOptions().then((options) => {
      console.log(`starting in ${process.env.NODE_ENV} mode`);
      const myOptions = {
        ...options,
        ...(connectionConfig as any)[process.env.NODE_ENV || "dev"],
      };
      console.log("with options", myOptions);
      return createConnection(myOptions).then((connection) => {
        DBConnection.connection = connection;
        return connection;
      });
    });
  }

  public static closeConnection(drop = false): Promise<void> {
    if (DBConnection.connection) {
      if (DBConnection.connection.isConnected) {
        let prom = Promise.resolve();
        if (drop) {
          prom = DBConnection.connection.dropDatabase();
          console.log("connection with dropped db");
        }
        return prom.then(() => {
          return DBConnection.connection!.close().then(() => {
            DBConnection.connection = undefined;
            console.log("connection closed");
          });
        });
      }
      DBConnection.connection = undefined;
      return Promise.resolve();
    }
    return Promise.resolve();
  }

  private static connection: Connection | undefined;
}
