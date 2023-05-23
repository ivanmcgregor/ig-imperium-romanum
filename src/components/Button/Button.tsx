import Styles from "./styles.module.css";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  className?: string;
  onClick: () => void;
}
export const Button = ({ onClick, children, className }: ButtonProps) => {
  return (
    <button
      className={`${Styles.button} ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
