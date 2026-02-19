"use client";

import { loginFn } from "@actions/auth";
import { useMutation } from "@tanstack/react-query";
import { AppError } from "@/types/error";
import { LoginResponseType, LoginFormType } from "@/schema/auth";

function useLogin() {
  return useMutation<LoginResponseType, AppError, LoginFormType>({
    mutationFn: loginFn,
    onError: (error) => {
      if (error.code === "VALIDATION_ERROR") {
        // 이곳에 토스트 띄우는 로직
      }
    },
  });
}

export default useLogin;
