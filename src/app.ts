import express, { Application as expressApplication } from 'express';
import bodyParser from 'body-parser'
import {addNumberRoman,addArabicNumber} from "./add_number";

export default class Application {
    public app: expressApplication // from import type express
    public port: number

    constructor(port: number) { //assign value
        this.app = express();
        this.port = port;

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));

        //route -> fn
        this.app.post('/api/v1/addNumberArabic', (request, response) => {
            response.json({"result":addArabicNumber(request.body)})
        })

        this.app.post('/api/v1/addNumberRoman', (request, response) => {
            response.json({"result":addNumberRoman(new Array(request.body))})
        })

        this.app.post('/api/v1/addNumber', (request, response) => {
            response.json({"result":4})
        })
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`app listening on port ${this.port}`)
        })
    }
}
