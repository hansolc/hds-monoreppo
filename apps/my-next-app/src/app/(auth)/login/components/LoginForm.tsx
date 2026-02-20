"use client";

import { Button, Stack, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import useLogin from "../hooks/useLogin";
import { LoginFormType, loginSchema } from "@/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppError } from "@/types/error";

const LoginForm = () => {
  const { mutateAsync: login } = useLogin();
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (values: LoginFormType) => {
    await login(values, {
      onError: (error) => {
        if (error instanceof AppError && error.isExpected) {
          setError("root", { message: error.message });
        }
      },
    });
  };

  return (
    <Stack component={"form"} spacing={2} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="아이디"
            type="text"
            autoComplete="username"
            fullWidth
            error={!!errors.username}
            helperText={errors.username?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="비밀번호"
            type="password"
            autoComplete="current-password"
            fullWidth
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        )}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        loading={isSubmitting}
        disabled={isSubmitting}
      >
        로그인
      </Button>
      {errors.root && (
        <Typography color="error">{errors.root.message}</Typography>
      )}
    </Stack>
  );
};

export default LoginForm;
