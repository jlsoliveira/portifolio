import { ArrowDown } from '@/icons';
import style from './ButtonDownload.module.css';

interface ButtonDownloadProps {
  name: string;
  file: string;
}

export function ButtonDownload({ name, file }: ButtonDownloadProps) {
  return (
    <a href={file} download className={style.button}>
      <span>{name}</span>
      <div className={style.button_icon}>
        <ArrowDown />
      </div>
    </a>
  );
}
