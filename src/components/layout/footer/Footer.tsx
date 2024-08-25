import { ButtonDownload } from "@/components/buttonDownload/ButtonDownload";
import { Heart } from "@/icons";
import style from "./Footer.module.css";
export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_container}>
        <ButtonDownload
          name="Download CV"
          file="./Cv-Johanna_liz_dos_Santos_Oliveira.pdf"
        />
        <p className={style.footer_by}>
          <span>Developed by</span>
          <span className="text-[10px]">|</span>
          <span>Hanna Liz</span>
        </p>
      </div>
    </footer>
  );
}
