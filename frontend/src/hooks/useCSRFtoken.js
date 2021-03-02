import _useRequest from './useRequest';


export const _useCSRFtoken = () => {
    return _useRequest().get('/protect/xsrf');
}

export default _useCSRFtoken
