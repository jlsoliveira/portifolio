import { Css } from '@/icons/Css';
import { skillsList } from '../../../mocks/skills';
import style from './Skills.module.css';

export function Skills() {
  const skills = skillsList;
  return (
    <section className={style.skills} id="skills">
      <div className={style.skills_container}>
        <h3 className={style.skills_container_title} data-aos="fade-up" data-aos-duration="350">
          Skills
        </h3>
        <ul className={style.skills_container_skills} data-aos="zoom-out-up" data-aos-duration="550">
          {skills.map((item) => (
            <li key={item.id}>
              <div className={style.skills_container_skills_item}>
                <div className={style.skills_container_skills_item_icon}>{item.icon}</div>
                <p>{item.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
