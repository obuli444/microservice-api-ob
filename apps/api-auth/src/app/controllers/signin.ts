import { AppRequest, AppResponse } from "@ccl-dopz-api/app-interface";
import axios from "axios";
export default async function Signin(req: AppRequest, res: AppResponse) {
    const parameters  = req.body;
    console.log("pa",parameters);
    res.json({
        status: true
    })
}