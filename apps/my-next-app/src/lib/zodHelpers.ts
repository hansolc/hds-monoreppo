import { z, type ZodSchema } from "zod";
import { AppError } from "@/types/error";

/**
 * ✨ API 응답을 Zod 스키마로 검증하는 헬퍼 함수
 * TanStack Query 문서 권장: safeParse 사용
 */
export function validateResponse<T>(schema: ZodSchema<T>, data: unknown): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    throw new AppError(
      "VALIDATION_ERROR",
      "서버 응답 형식이 올바르지 않습니다.",
    );
  }

  return result.data;
}
