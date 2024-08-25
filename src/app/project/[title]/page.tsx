"use client";

import "aos/dist/aos.css";

import { CodePen, Computer, GitHub } from "@/icons";
import React, { useEffect } from "react";

import AOS from "aos";
import Image from "next/image";
import { ProjectList } from "@/mocks/projects";
import style from "./page.module.css";
import { useParams } from "next/navigation";

export default function ProjectDetail() {
  const { title } = useParams();
  useEffect(() => {
    AOS.init();
  }, []);

  const removeAccents = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const decodedTitle =
    typeof title === "string" ? removeAccents(title.replace(/-/g, " ")) : "";

  const projects = ProjectList;

  const project = projects.find((p) => {
    const projectTitle = removeAccents(p.title.toLowerCase());
    return projectTitle === decodedTitle;
  });
  if (!project) return <div>Project not found</div>;

  return (
    <section className={style.project}>
      <div className={style.project_container}>
        <div
          className={style.project_image}
          data-aos="zoom-in"
          data-aos-duration="550"
        >
          <Image
            src={project.imageDetailUrl}
            alt={project.title}
            width={580}
            height={659}
            priority
          />
        </div>
        <div className="order-1 md:order-2 mx-5">
          <h1
            className={style.project_title}
            data-aos="fade-up"
            data-aos-duration="650"
          >
            {project.title}
          </h1>
          <div
            className={style.project_description}
            data-aos="fade-up"
            data-aos-duration="650"
          >
            {project.description}
          </div>

          <ul
            className={style.project_ul}
            data-aos="fade-up"
            data-aos-duration="650"
          >
            {project.siteUrl && (
              <li>
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={style.project_ul_item}>
                    <Computer />
                    <span>{project.siteUrl}</span>
                  </div>
                </a>
              </li>
            )}
            {project.gitHubUrl && (
              <li>
                <a
                  href={project.gitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={style.project_ul_item}>
                    <GitHub />
                    <span>{project.gitHubUrl}</span>
                  </div>
                </a>
              </li>
            )}
            {project.codePenUrl && (
              <li>
                <a
                  href={project.codePenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={style.project_ul_item}>
                    <CodePen />
                    <span>{project.codePenUrl}</span>
                  </div>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
