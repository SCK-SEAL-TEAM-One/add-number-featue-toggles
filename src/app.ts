import express, { Application as expressApplication } from 'express';

export default class Application {
    public app: expressApplication // from import type express
    public port: number

    constructor(port: number) { //assign value
        this.app = express();
        this.port = port;

        //route -> fn
        this.app.post('/api/v1/addNumberArabic', (request, response) => {
            //response.send('hello world')
            response.json({"resual":"4"})
        })
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`app listening on port ${this.port}`)
        })
    }
}