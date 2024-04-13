import axios from "axios";


export const getRequest = async ({url, params={}}) => {
    let resp;
    try{
        resp = await axios.get(url, {params})
        return resp.data
        
    }catch(err){
       return {error: err.message}
    }
};

