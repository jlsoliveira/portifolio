'use client';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ArrowRight } from '@/icons';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectList } from '@/mocks/projects';
import style from './Projects.module.css';

const projects = ProjectList;
const removeAccents = (str: string) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

const encodeTitle = (title: string) => {
  return removeAccents(title.toLowerCase()).replace(/\s+/g, '-');
};

export function Projects() {
  return (
    <section className={style.project} id="projects" data-aos="fade-in" data-aos-duration="550">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <Link href={`/project/${encodeTitle(project.title)}`}>
              <div className={style.project_item}>
                <Image src={project.imageUrl} alt={project.title} width={480} height={659} priority />
                <div className={style.project_item_overlay}>
                  <div>
                    <p className="mb-3">{project.title}</p>
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
