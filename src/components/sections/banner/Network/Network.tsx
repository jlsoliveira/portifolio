import { CodePen, GitHub, LinkedIn } from "@/icons";

import style from "./Network.module.css";

export function Network() {
  return (
    <div className={style.network}>
      <div>
        <ul className={style.network_ul}>
          <li data-aos="fade-up" data-aos-duration="450">
            <a
              href="https://github.com/jlsoliveira"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
          </li>
          <li data-aos="fade-up" data-aos-duration="550">
            <a
              href="https://www.linkedin.com/in/jlsoliveira/?original_referer="
              aria-label="Linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn />
            </a>
          </li>
          <li data-aos="fade-up" data-aos-duration="650">
            <a
              href="https://codepen.io/Hanna_Liz"
              aria-label="Codepen"
              target="_blank"
              rel="noreferrer"
            >
              <CodePen />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
