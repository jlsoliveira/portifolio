import Image from "next/image";
import style from "./AboutMe.module.css";

export function AboutMe() {
  return (
    <section className={style.about} id="about">
      <div className={style.about_container}>
        <Image
          data-aos="zoom-out-up"
          data-aos-duration="350"
          src="/me.png"
          alt="Hannal_Liz"
          width={516}
          height={681}
          priority
        />
        <div className={style.about_text}>
          <h2
            data-aos="fade-up"
            data-aos-duration="350"
            className={style.about_text_title}
          >
            ABOUT ME
          </h2>
          <p data-aos="fade-up" data-aos-duration="350">
            Frontend Developer with over 7 years of experience in web and hybrid
            application development. Passionate about creating intuitive and
            optimized interfaces
          </p>
          <p data-aos="fade-up" data-aos-duration="350">
            With a degree in Graphic Design, I have a deep understanding of
            UI/UX and enjoy incorporating these concepts into my projects to
            ensure maximum usability for all audiences. Experienced with agile
            practices such as Scrum, I effectively manage projects and am always
            looking for new challenges to enhance my skills and deliver
            high-quality solutions. I also have international experience and am
            committed to continuously improving my craft.
          </p>
        </div>
      </div>
    </section>
  );
}
