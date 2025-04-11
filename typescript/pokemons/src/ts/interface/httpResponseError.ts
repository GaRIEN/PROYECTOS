export interface httpOptions extends RequestInit {
    body?: any;
  }
  
export interface httpResponseError {
    err: boolean;
    status: number | string;
    statusText: string;
  }
  