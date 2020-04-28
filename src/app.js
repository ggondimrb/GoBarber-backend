const express = require("express");
const routes = require("./routes");
import path from "path";
import "./database";

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      "/files",
      express.static(path.resolve(__dirname, "..", "temp", "uploads"))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
