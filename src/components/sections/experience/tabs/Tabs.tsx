'use client';

import React, { useState } from 'react';

import style from './Tabs.module.css';

type Tab = {
  id: string;
  title: string;
  role: string;
  date: string;
  local: string;
  content: React.ReactNode;
};

interface TabsProps {
  tabs: Tab[];
}

export function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className={style.tabs}>
      <div className={style.tabs_titles}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`md:py-3 px-4 text-lg text-left w-96  md:border-l-2  ${
              activeTab === tab.id ? 'md:border-l-2 border-l-secondary text-secondary' : 'text-black'
            } hover:text-secondary focus:outline-none`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={style.tabs_body}>
        {tabs.map(
          (tab) =>
            tab.id === activeTab && (
              <div key={tab.id}>
                <h3 data-aos="fade-up" data-aos-duration="550" className={style.tabs_body_title}>
                  {tab.title}
                </h3>
                <div className={style.tabs_body_role} data-aos="fade-up" data-aos-duration="550">
                  <span>{tab.role}</span>
                  <span>- {tab.local}</span>
                </div>
                <p data-aos="fade-up" data-aos-duration="550" className={style.tabs_body_date}>
                  {tab.date}
                </p>
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
}
