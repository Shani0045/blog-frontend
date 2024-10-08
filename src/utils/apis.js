import axios from "axios";


export const getRequest = async ({url, data={}}) => {    
    try{
        let resp = await axios.get(url, {params: data})
        return resp.data
        
    }catch(err){
       return {error: err.message}
    }
};


export const postRequest = async ({url, data}) => {

    try{
        let resp = await axios.post(url, data)
        return resp.data
        
    }catch(err){
       return {error: err.message}
    }
};
