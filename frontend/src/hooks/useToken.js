import { useCallback } from "react";

const TOKEN = "api_token"


const _useToken = () => {

    const getToken   = useCallback(() => localStorage.getItem(TOKEN), []);
    const setToken   = useCallback((item) => localStorage.setItem(TOKEN, item), []);
    const clearToken = useCallback(() => localStorage.clear(), []);

    return [ getToken, setToken, clearToken ]
}

export default _useToken
