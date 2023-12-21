
class CommonService {
    
    getAxiosConfigs(method: string, url: string, token?: string, data?: any) {
        const axiosConfig: any = {
            method,
            url,
            headers: {
                accept: 'application/json',
                'content-type': 'application/x-www-form-urlencoded',
                Authorization: token ? token : null,
            },
            data
        }
        return axiosConfig;
    }


}
export default new CommonService();