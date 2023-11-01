import type { UseFetchOptions } from "nuxt/app";

type Methods = "GET" | "POST" | "DELETE" | "PUT";


// const baseURL = 'https://mock.apifox.cn/m1/3136188-0-default';
// console.log('useRuntimeConfig()', useRuntimeConfig());
// console.log('useRuntimeConfig().public', useRuntimeConfig().public);
// console.log('baseURL', baseURL);

class HttpRequest {
	// const baseURL = useRuntimeConfig().public.baseURL;
  request<T = any>(
    url: string,
    method: Methods,
    data: any,
    options?: UseFetchOptions<T>,
  ) {
    return new Promise((resolve, reject) => {
      const newOptions: UseFetchOptions<T> = {
        baseURL: useRuntimeConfig().public.baseURL,
        method: method,
        ...options,
      };

      if (method === "GET" || method === "DELETE") {
        newOptions.params = data;
      }
      if (method === "POST" || method === "PUT") {
        newOptions.body = data;
      }

      useFetch(url, newOptions)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // 封装常用方法

  get<T = any>(url: string, params?: any, options?: UseFetchOptions<T>) {
    return this.request(url, "GET", params, options);
  }

  post<T = any>(url: string, data: any, options?: UseFetchOptions<T>) {
    return this.request(url, "POST", data, options);
  }

  Put<T = any>(url: string, data: any, options?: UseFetchOptions<T>) {
    return this.request(url, "PUT", data, options);
  }

  Delete<T = any>(url: string, params: any, options?: UseFetchOptions<T>) {
    return this.request(url, "DELETE", params, options);
  }
}

const httpRequest = new HttpRequest();

export default httpRequest;
