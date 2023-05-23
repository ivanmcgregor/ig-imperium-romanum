import Styles from "./styles.module.css";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  className?: string;
  to: string;
}
export const LinkButton = ({ to, children, className }: ButtonProps) => {
  return (
    <Link
      className={`${Styles.button} ${className ? className : ""}`}
      href={to}
    >
      {children}
    </Link>
  );
};
