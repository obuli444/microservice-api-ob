import { AppRequest, AppResponse } from "@ccl-dopz-api/app-interface";
import axios from "axios";
const querystring = require('querystring');
import { CommonService } from '@ccl-dopz-api/utils';
import { AppConstants } from '@ccl-dopz-api/constants';
import { KEYCLOAK_ENDPOINTS } from "../endpoints/keycloak";


export class userSignupController {


    async userSignup(req: AppRequest, res: AppResponse) {
        try {
            const { realm,username,email,enabled,credentials} = req.body;
            const authToken:string = req.headers.authorization || null;
            const { HOST, REALM, USERS } = KEYCLOAK_ENDPOINTS;
            const apiUrl = `${HOST}${REALM.ADMIN}/${realm}${USERS.COMMON}`;
            const data = {
                username,
                email,
                enabled,
                credentials,
            };
            const encodedData = querystring.stringify(data);
            const axiosConfig = await CommonService.getAxiosConfigs(AppConstants.HTTP_METHODS[1], apiUrl, authToken, encodedData);
            await axios.request(axiosConfig).then((response) => {
                const data = response.data;
                res.json({
                    status: true,
                    message: 'User create successfully',
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
                message: 'User create error',
                data: e
            })
        }
    }





}


export default new userSignupController();