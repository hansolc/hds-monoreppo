import http from "@/lib/http";
import { AppError } from "@/types/error";
import { validateResponse } from "@/lib/zodHelpers";
import { LoginFormType, loginResponseSchema } from "@/schema/auth";

export const loginFn = async (formData: LoginFormType) => {
  try {
    const res = await http.post("/auth/login", formData);
    return validateResponse(loginResponseSchema, res.data);
  } catch (error) {
    if (error instanceof AppError) {
      if (error.message === "Invalid credentials") {
        throw new AppError(400, "등록되지 않은 사용자 입니다.", true);
      }
      throw error;
    }
    throw error;
  }
};
