import { type ButtonHTMLAttributes, type ReactNode } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button = ({ children, ...props }: IButtonProps) => {
  return <button {...props}>{children}</button>
}

export default Button
