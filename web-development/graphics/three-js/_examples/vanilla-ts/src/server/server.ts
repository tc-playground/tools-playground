import express from 'express';
import http from 'http';
import path from 'path';

const port: number = 3000;

class App {
  private server: http.Server;
  private port: number;

  constructor(port: number) {
    this.port = port;
    const app = express();
    app.use(express.static(path.join(__dirname, '../client')));
    app.use(
      '/build/three.module.js',
      express.static(path.join(__dirname, '../../node_modules/three/build/three.module.js'))
    );

    this.server = new http.Server(app);
  }

  public Start() {
    this.server.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}.`);
    });
  }
}

new App(port).Start();
