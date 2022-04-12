import express, { Application } from 'express'

export class App {
    public app: Application

    private port: number

    constructor (port: number) {
      this.app = express()
      this.port = port
    }

    public start () {
      this.app.listen(this.port, () => {
        console.log('Funcionou')
      })
    }
}
