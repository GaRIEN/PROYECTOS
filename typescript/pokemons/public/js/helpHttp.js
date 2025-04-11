var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const helpHttp = () => {
    const customFetch = (endpoint_1, ...args_1) => __awaiter(void 0, [endpoint_1, ...args_1], void 0, function* (endpoint, options = {}) {
        const defaultHeaders = {
            accept: "application/json",
        };
        const controller = new AbortController();
        options.signal = controller.signal;
        options.method = options.method || "GET";
        options.headers = options.headers
            ? Object.assign(Object.assign({}, defaultHeaders), options.headers) : defaultHeaders;
        if (options.body) {
            options.body = JSON.stringify(options.body);
            if (!options.headers["content-Type"]) {
                options.headers = Object.assign(Object.assign({}, options.headers), { "content-Type": "application/json" });
            }
        }
        else {
            delete options.body;
        }
        setTimeout(() => controller.abort(), 5000);
        try {
            const res = yield fetch(endpoint, options);
            if (!res.ok) {
                throw {
                    err: true,
                    status: res.status || "00",
                    statusText: res.statusText || "Ocurrió un error",
                };
            }
            const data = yield res.json();
            return data;
        }
        catch (err) {
            return err;
        }
    });
    const get = (url, options = {}) => customFetch(url, options);
    const post = (url, options = {}) => {
        options.method = "POST";
        return customFetch(url, options);
    };
    const put = (url, options = {}) => {
        options.method = "PUT";
        return customFetch(url, options);
    };
    const del = (url, options = {}) => {
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
