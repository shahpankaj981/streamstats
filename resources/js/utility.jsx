import axios from "axios";

const prepareApiCall = (url, method='get', data={}) => {
    const config = {
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    };
    if(method == 'get') {
        return axios.get(url, config);
    }
    
    return axios({
        method: method,
        url: url,
        data: config,
        config
    });
};

export {prepareApiCall};