import express, { Application as expressApplication } from 'express';
import bodyParser from 'body-parser'
import {addArabicNumber, addNumberRoman} from "./add_number";

export default class Application {
    public app: expressApplication // from import type express
    public port: number
    public featureDecision: FeatureDecision

    constructor(port: number) { //assign value
        this.app = express();
        this.port = port;
        this.featureDecision = {isEnableNewFeature : true}

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));

        //route -> fn
        this.app.post('/api/v1/addNumberArabic', (request, response) => {
            response.json({"result":addArabicNumber(request.body)})
        })

        this.app.post('/api/v1/addNumberRoman', (request, response) => {
            response.json({"result":addNumberRoman(request.body)})
        })

        this.app.post('/api/v1/addNumber', (request, response) => {
            if (this.featureDecision.isEnableNewFeature) {
                response.json({"result":addNumberRoman(request.body)})
            } else {
                response.json({"result":addArabicNumber(request.body)})
            }
        })
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`app listening on port ${this.port}`)
        })
    }
}

class FeatureDecision {
    public isEnableNewFeature : boolean

    constructor(isEnableNewFeature: boolean) {
        this.isEnableNewFeature = isEnableNewFeature;
    }
}
