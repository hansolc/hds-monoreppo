import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(1, "아이디를 입력해주세요.")
    .regex(/^[a-zA-Z0-9]+$/, "아이디는 영문자와 숫자만 사용할 수 있습니다."),
  password: z
    .string()
    .min(4, "비밀번호는 4자 이상이어야 합니다.")
    .regex(/^[a-zA-Z0-9]+$/, "비밀번호는 영문자와 숫자만 사용할 수 있습니다."),
});

export const loginResponseSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.email(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.enum(["MALE", "FEMALE"]),
  image: z.string(),
  accessToken: z.string(),
  refreshToken: z.string(),
});

export type LoginFormType = z.infer<typeof loginSchema>;
export type LoginResponseType = z.infer<typeof loginResponseSchema>;
