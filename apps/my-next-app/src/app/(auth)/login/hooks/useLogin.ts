"use client";

import { loginFn } from "@actions/auth";
import { useMutation } from "@tanstack/react-query";
import { AppError } from "@/types/error";
import { LoginResponseType, LoginFormType } from "@/schema/auth";
import { useToastStore } from "@/store/toast";

function useLogin() {
  const { actions } = useToastStore();
  return useMutation<LoginResponseType, AppError, LoginFormType>({
    mutationFn: loginFn,
    // global 에러를 표시하지 않을 경우 meta.skipGlobalError를 true로 설정
    meta: {
      skipGlobalError: false,
    },
  });
}

export default useLogin;
