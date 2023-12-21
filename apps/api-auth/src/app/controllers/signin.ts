import { AppRequest, AppResponse } from "@ccl-dopz-api/app-interface";
import axios from "axios";
const querystring = require('querystring');

export default async function Signin(req: AppRequest, res: AppResponse) {
const {client_id,client_secret,username,password,realm} = req.body;
const keycloakBaseUrl = `https://authenticate.ccapps.in/auth/realms/${realm}/protocol/openid-connect/token`;
const data = {
  grant_type: 'password',
  client_id,
  client_secret,
  username: username,
  password: password,
};

// Convert data to URL-encoded form
const encodedData = querystring.stringify(data);

// Set the headers for URL-encoded form data
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
};
axios.post(`${keycloakBaseUrl}`, encodedData, { headers })
  .then((response)=>{
    const data  = response.data;
    res.json({
        status : true,
        message : 'login success',
        data : data
    })
  })
  .catch(error => {
    const errordata = error.response ? error.response.data : error.message;
    res.json({
        status : false,
        message : 'login false',
        data : errordata
    })
    req.logger.log(__filename, 'warn',errordata);
    console.error('Error:',errordata);
  });



    
}