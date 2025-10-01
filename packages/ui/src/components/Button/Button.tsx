import { type ButtonHTMLAttributes, type ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  test: any
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}123</button>
}

export default Button
