import { AppRequest, AppResponse } from "@ccl-dopz-api/app-interface";
import axios from "axios";
const querystring = require('querystring');
import { CommonService } from '@ccl-dopz-api/utils';
import { AppConstants } from '@ccl-dopz-api/constants';
import { KEYCLOAK_ENDPOINTS } from "../endpoints/keycloak";


export class userSignoutController {


    async signOutSession(req: AppRequest, res: AppResponse) {
        try {
            const { client_id, client_secret, refreshtoken,realm} = req.body;
            const { HOST, REALM, SIGNOUT } = KEYCLOAK_ENDPOINTS;
            const apiUrl = `${HOST}${REALM.AUTH}/${realm}${SIGNOUT}`;
            const data = {
                client_id,
                client_secret,
                token : refreshtoken
            };
            const encodedData = querystring.stringify(data);
            const axiosConfig = await CommonService.getAxiosConfigs(AppConstants.HTTP_METHODS[1], apiUrl, '', encodedData);
            await axios.request(axiosConfig).then((response) => {
                const data = response.data;
                res.json({
                    status: true,
                    message: 'User logout success',
                    data: null
                })
            }).catch((error) => {
                const errordata = error.response ? error.response.data : error.message;
                const { error_description } = errordata;
                res.json({
                    status: false,
                    message: error_description,
                    data: null
                })
            });
        }
        catch (e) {
            res.json({
                status: false,
                message: 'User logout error',
                data: e
            })
        }
    }





}


export default new userSignoutController();