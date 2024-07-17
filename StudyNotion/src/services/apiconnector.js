import axios from "axios"

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {
    console.log("IN API CONNECTOR",headers);
    try{
        return axiosInstance({
            method:`${method}`,
            url:`${url}`,
            data: bodyData ? bodyData : null,
            headers: headers ? headers: null,
            params: params ? params : null,
        });

    }
    catch(error ){
        console.log("Failig here");
        return null;

    }
    
}