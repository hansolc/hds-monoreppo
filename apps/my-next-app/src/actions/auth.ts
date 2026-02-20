import http from "@/lib/http";
import { AppError } from "@/types/error";
import { validateResponse } from "@/lib/zodHelpers";
import { LoginFormType, loginResponseSchema } from "@/schema/auth";
import { AUTH_ERRORS } from "@/constants/errors";

export const loginFn = async (formData: LoginFormType) => {
  try {
    const res = await http.post("/auth/login", formData);
    return validateResponse(loginResponseSchema, res.data);
  } catch (error) {
    if (error instanceof AppError) {
      if (error.message === AUTH_ERRORS.INVALID_CREDENTIALS.apiMessage) {
        throw new AppError(
          400,
          AUTH_ERRORS.INVALID_CREDENTIALS.userMessage,
          true,
        );
      }
      throw error;
    }
    throw error;
  }
};
