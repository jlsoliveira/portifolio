import style from "./Button.module.css";
interface ButtonProps {
  title: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  type: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}

export function Button({ title, icon, type, disabled }: ButtonProps) {
  return (
    <button
      type={type}
      className={style.button}
      disabled={disabled}
      style={disabled ? { opacity: 0.5 } : {}}
    >
      <div>{title}</div>
      <div>{icon}</div>
    </button>
  );
}
