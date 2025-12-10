import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<LinkProps>;

export function Button({ children, ...props }: ButtonProps) {
    return <Link className="primary" {...props}>{children}</Link>;
}