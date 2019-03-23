import DefaultController from "./default.controller";
import express, { Request, Response } from "express";

//https://www.npmjs.com/package/mailchimp-api-v3
//https://developer.mailchimp.com/documentation/mailchimp/reference/overview/
// https://developer.mailchimp.com/documentation/mailchimp/guides/error-glossary/

//Mailchimp does not support client-side implementation of our API using CORS requests 
//due to the potential security risk of exposing account API keys.

export class MailChimpController extends DefaultController {
    
    protected initializeRoutes(): express.Router {
        const router = express.Router();

        router.route('/email').post((req: Request, res: Response) => {

            const axios = require('axios');
            
            //mailchimp list info
            const mailchimpApiKey = "0add730ed2afe84be3bb8ff58b0c8611-us20\\"
            
            const mailchimpInstance = "us20";
            const u = "1b710cfbce51379fff004977c&amp;";  
            const listUniqueId = "9af8420170";

            //url path to list members
            const path = "https://"+mailchimpInstance +".api.mailchimp.com/3.0/lists/" +listUniqueId+ "/members/";
            //const postman_auth = 'Basic YW55c3RyaW5nOjBhZGQ3MzBlZDJhZmU4NGJlM2JiOGZmNThiMGM4NjExLXVzMjA='; //idk?
            const auth = 'anystring:' + mailchimpApiKey;
            const buf = Buffer.from(auth, 'ascii');
            const encodedAuth = buf.toString('base64');
            //console.log(encodedAuth);

            //post data 
            var options = {
                method: 'POST',
                path: path,
                headers : {
                    Authorization: 'Basic ' + encodedAuth,
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                },
                body : {
                    email_address : req.body.email,
                    status : 'subscribed',
                },
                json: true
            };

            //console.log(options);

            //send to mailchimp
            axios
                .post(path,options)
                .then((response:Response) => {
                    res.status(200).send({data:"success"});
                    console.log(response);
                })
                .catch((error:Response) => {
                    res.status(401).send({data:"didn't work out"});
                    console.log(error);
                })
                
        });

        return router;
    }


}

export default MailChimpController;

