import axios from 'axios';
import Vue from 'vue';
import store from '../store';
import { AxiosResponse } from 'axios';
// const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpcC1zeXMiLCJjbGllbnRJZCI6MywiaWF0IjoxNTM0OTIwNjc0LCJleHAiOjE1MzU1MjU0NzR9.5b2WH23sT7sD_Jdgznf93qNetE-4vqH8KRPb3-fyg2I';

// const getToken = () => {
//     return token;
// };

interface httpResult {
    message: string,
    data: any,
    status: number
}

const httpMethods = {
    get(url: string, params: Object) {
        const formmatterParams = {};
        if (params) {
            Object.keys(params).forEach(key => {
                if ((<any>params)[key] instanceof Array) {
                    (<any>formmatterParams)[key] = (<any>params)[key].join(',');
                } else if ((<any>params)[key] !== '') {
                    (<any>formmatterParams)[key] = (<any>params)[key];
                }
            });
        }
        return axios.get(url, {
            params: formmatterParams,
            headers: { 'X-Requested-With': 'XMLHttpRequest', Authorization: store.getters.token },
            withCredentials: true
        }
        ).catch((err): Promise<AxiosResponse> => {
            if (err.response.status === 401) {
                const url = encodeURIComponent(window.location.href);
                // window.location.href = err.response.data.data;
                window.location.href = `/api/redirect?url=${url}`;
            }
            return Promise.reject(err);
        }).then(res => {
            if (res.data && res.data.status !== 0) {
                // this.$message.error(res.data.message);
                // this.loading = false;
                // return Promise.reject();  
                if (res.data.status === -1) {
                    // return Promise.resolve(res);
                    Promise.reject(res.data);
                }
            }
            return res.data;
        });
    }
};

const get = httpMethods.get;
export { get };

export default {
    install() {
        Vue.prototype.$httpRequest = {};
        Object.keys(httpMethods).forEach(key => {
            Vue.prototype.$httpRequest[key] = (<any>httpMethods)[key].bind(Vue.prototype);
        });
    }
};