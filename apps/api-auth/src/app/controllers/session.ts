import { AppRequest, AppResponse } from "@ccl-dopz-api/app-interface";
import axios from "axios";
const querystring = require('querystring');
import { CommonService } from '@ccl-dopz-api/utils';
import { AppConstants } from '@ccl-dopz-api/constants';
import { KEYCLOAK_ENDPOINTS } from "../endpoints/keycloak";


export class userSessionController {


    async checkUserSession(req: AppRequest, res: AppResponse) {
        try {
            const { client_id, client_secret, refreshtoken,realm} = req.body;
            const { HOST, REALM, CHECK_TOCKEN } = KEYCLOAK_ENDPOINTS;
            const tokenUrl = `${HOST}${REALM.AUTH}/${realm}${CHECK_TOCKEN}`;
            const data = {
                client_id,
                client_secret,
                token : refreshtoken
            };
            const encodedData = querystring.stringify(data);
            const axiosConfig = await CommonService.getAxiosConfigs(AppConstants.HTTP_METHODS[1], tokenUrl, '', encodedData);
            await axios.request(axiosConfig).then((response) => {
                const data = response.data;
                res.json({
                    status: true,
                    message: 'User session found',
                    data: data
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
                message: 'Session not found',
                data: e
            })
        }
    }





}


export default new userSessionController();