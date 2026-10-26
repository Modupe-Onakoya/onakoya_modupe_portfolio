import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import Icon from "./Icon";

const baseClasses =
  "inline-flex min-h-[52px] items-center justify-between gap-7 border border-electric bg-electric px-6 text-[11px] uppercase tracking-[.13em] text-white transition-all duration-200 hover:-translate-y-[3px] hover:bg-[#4c7cff] hover:shadow-[0_15px_40px_rgba(53,108,255,.25)] lg:justify-center lg:cursor-none";

interface CommonProps {
  children: ReactNode;
  secondary?: boolean;
  className?: string;
}

type ButtonProps =
  | (CommonProps & {
    href: string;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
    type?: never;
  })
  | (CommonProps & {
    href?: never;
    onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    disabled?: boolean;

  });

export default function Button({ children, secondary = false, className = "", ...props }: ButtonProps) {
  const variant = secondary
    ? "border-line bg-white/[.03] backdrop-blur-lg hover:border-white/30 hover:bg-white/[.08] hover:shadow-none"
    : "";
  const classes = `${baseClasses} ${variant} ${className}`;
  const icon = <Icon name={secondary ? "download" : "arrow"} />;

  if (props.href) {
    const linkProps = props as Extract<ButtonProps, { href: string }>;
    return <a className={classes} href={linkProps.href} onClick={linkProps.onClick}>{children}{icon}</a>;
  }

  const buttonProps = props as Extract<ButtonProps, { href?: never }>;
  return <button className={classes} type={buttonProps.type} onClick={buttonProps.onClick}>{children}{icon}</button>;
}
