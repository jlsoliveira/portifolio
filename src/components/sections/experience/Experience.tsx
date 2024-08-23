import { ExperienceTab } from '@/mocks/experiences';
import { Tabs } from './tabs/Tabs';
import style from './Experience.module.css';
export function Experience() {
  const tabs = ExperienceTab;
  return (
    <section className={style.experience} id="experience">
      <div className={style.experience_container}>
        <div>
          <h3 data-aos="fade-up" data-aos-duration="350" className={style.experience_title}>
            Experience
          </h3>
          <Tabs tabs={tabs} data-aos="fade-in" data-aos-duration="350" />
        </div>
      </div>
    </section>
  );
}
