// src/components/Button.tsx

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "accent" | "outline";
};

export default function Button({
  variant = "accent",
  children,
  ...props
}: ButtonProps) {
  const className =
    variant === "accent" ? "btn btn-accent" : "btn btn-outline-accent";

  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
}
