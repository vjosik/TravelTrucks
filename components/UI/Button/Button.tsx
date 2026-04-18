import Link from "next/link";
import css from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  href?: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  text,
  href,
  className,
  target,
  disabled,
  ...props
}: ButtonProps) {
  const combinedClassName = `${css.btn} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName} target={target}>
        {text}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} disabled={disabled} {...props}>
      {text}
    </button>
  );
}
