import { LinkButton } from "@/components/Button/LinkButton";
import { PropsWithChildren } from "react";

interface ButtonWrapperProps extends PropsWithChildren {
  to: string;
  lastItem?: boolean;
  className?: string;
}

export const ButtonWrapper = ({
  to,
  lastItem,
  children,
  className,
}: ButtonWrapperProps) => (
  <div className={`row ${lastItem ? "mb-4" : ""} ${className}`}>
    <div className="col col-md-6 offset-md-3">
      <LinkButton to={to}>{children}</LinkButton>
    </div>
  </div>
);
