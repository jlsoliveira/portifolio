import { ButtonDownload } from "@/components";
import { Network } from "./Network/Network";
import style from "./Banner.module.css";

export function Banner() {
  return (
    <section
      className={style.banner}
      style={{
        backgroundImage: "url('./banner.jpg')",
      }}
      id="home"
    >
      <div className={style.banner_container}>
        <div className={style.banner_container_text}>
          <p
            data-aos="fade-down"
            data-aos-duration="650"
            className={style.banner_container_text_tag}
          >
            My name is
          </p>

          <div className={style.banner_container_text_name}>
            <h1 data-aos="fade-right" data-aos-duration="650">
              Johanna Liz dos Santos de Oliveira
            </h1>

            <div
              className={style.banner_container_text_name_content}
              data-aos="fade-right"
              data-aos-duration="550"
            >
              <p>Desenvolvedora</p>
              <p
                className={`${style.banner_container_text_role}  animate-typewriter`}
              >
                Front-end.
              </p>
            </div>
          </div>

          <p
            className={style.banner_container_text_description}
            data-aos="fade-up"
            data-aos-duration="650"
          >
            Frontend Developer with over 7 years of experience in web and hybrid
            application development.
          </p>
          <div data-aos="fade-up" data-aos-duration="650">
            <ButtonDownload
              name="Download CV"
              file="./Cv-Johanna_liz_dos_Santos_Oliveira.pdf"
            />
          </div>
        </div>
        <Network />
      </div>
    </section>
  );
}
