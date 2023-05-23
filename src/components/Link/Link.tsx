import Styles from "./styles.module.css";
import { PropsWithChildren } from "react";
import NextLink from "next/link";

interface LinkProps extends PropsWithChildren {
  href: string;
  className?: string;
}
export const Link = ({ href, children, className }: LinkProps) => (
  <NextLink href={href} className={`${Styles.link} ${className}`}>
    {children}
  </NextLink>
);
