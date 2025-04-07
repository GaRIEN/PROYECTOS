import { httpOptions, httpResponseError } from "./interface/interface";
export const helpHttp = () => {
  const customFetch = async (
    endpoint: string,
    options: httpOptions = {}
  ): Promise<any | httpResponseError> => {
    const defaultHeaders = {
      accept: "application/json",
    };

    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;

    if (options.body) {
      options.body = JSON.stringify(options.body);
      if (!options.headers["content-Type"]) {
        options.headers = {
          ...options.headers,
          "content-Type": "application/json",
        };
      }
    } else {
      delete options.body;
    }

    setTimeout(() => controller.abort(), 5000);
    try {
      const res = await fetch(endpoint, options);
      if (!res.ok) {
        throw {
          err: true,
          status: res.status || "00",
          statusText: res.statusText || "Ocurrió un error",
        };
      }
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  };
  const get = (url: string, options: httpOptions = {}) =>
    customFetch(url, options);
  const post = (url: string, options: httpOptions = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };
  const put = (url: string, options: httpOptions = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };
  const del = (url: string, options: httpOptions = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };
  return {
    get,
    post,
    put,
    del,
    customFetch,
  };
};
