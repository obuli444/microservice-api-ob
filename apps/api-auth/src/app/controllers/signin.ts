import { AppRequest, AppResponse } from "@ccl-dopz-api/app-interface";
import axios from "axios";
const querystring = require('querystring');
import { CommonService } from '@ccl-dopz-api/utils';

export default async function Signin(req: AppRequest, res: AppResponse) {
    const { client_id, client_secret, username, password, realm } = req.body;
    const keycloakBaseUrl = `https://authenticate.ccapps.in/auth/realms/${realm}/protocol/openid-connect/token`;
    const data = {
        grant_type: 'password',
        client_id,
        client_secret,
        username: username,
        password: password,
    };
    const encodedData = querystring.stringify(data);
    const axiosConfig = await CommonService.getAxiosConfigs('POST', keycloakBaseUrl, '', encodedData);
    await axios.request(axiosConfig).then((response) => {
        const data = response.data;
        res.json({
            status: true,
            message: 'login success',
            data: data
        })
    }).catch((error) => {
        const errordata = error.response ? error.response.data : error.message;
        res.json({
            status: false,
            message: 'login false',
            data: errordata
        })
    });
}