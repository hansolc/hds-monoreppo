import { AppError } from "@/types/error";
import axios, { AxiosError } from "axios";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

http.interceptors.response.use(
  (response) => response,
  (error: Error) => {
    if (error instanceof AxiosError) {
      const status = error.response?.status;
      const message = error.response?.data?.message || error.message;

      // 서버 에러
      if (status && status >= 500) {
        return Promise.reject(
          new AppError(status, "서버 에러가 발생했습니다.", false),
        );
      }

      if (status && status < 500) {
        return Promise.reject(new AppError(status, message, true));
      }

      return Promise.reject(
        new AppError("UNKNOWN_ERROR", "알 수 없는 오류가 발생했습니다.", false),
      );
    }

    return Promise.reject(
      new AppError("UNKNOWN_ERROR", "알 수 없는 오류가 발생했습니다.", false),
    );
  },
);

export default http;
