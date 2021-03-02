import axios from 'axios';
import _useToken from './useToken'

export const _useRequest = () => {

    const[getToken] = _useToken();
    const token = getToken();

    if(!token) return axios;
    
    axios.defaults.headers.common['Authorization'] = token;

    return axios;
}

export default _useRequest
