import style from './Button.module.css';
interface ButtonProps {
  title: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  type: 'submit' | 'reset' | 'button' | undefined;
}

export function Button({ title, icon, type }: ButtonProps) {
  return (
    <button type={type} className={style.button}>
      <div>{title}</div>
      <div>{icon}</div>
    </button>
  );
}
