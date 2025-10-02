import { type ButtonHTMLAttributes, type ReactNode } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  test: number
}

const Button = ({ children, ...props }: IButtonProps) => {
  return <button {...props}>{children}123</button>
}

export default Button
