import type React from "react";
import { ButtonVariant } from "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼의 시각적 스타일
   */
  variant?: ButtonVariant["variant"];
  /**
   * 버튼의 크기
   */
  size?: ButtonVariant["size"];
  /**
   * 전체 너비로 표시할지 여부
   */
  fullWidth?: boolean;
  /**
   * 버튼 내부에 표시될 컨텐츠
   */
  children: React.ReactNode;
  /**
   * 버튼이 로딩 상태인지 여부
   * @default false
   */
  isLoading?: boolean;
  /**
   * 버튼 앞에 표시될 아이콘
   */
  leftIcon?: React.ReactNode;
  /**
   * 버튼 뒤에 표시될 아이콘
   */
  rightIcon?: React.ReactNode;
  /**
   * ref를 전달하기 위한 as 속성
   */
  as?: React.ElementType;
}
