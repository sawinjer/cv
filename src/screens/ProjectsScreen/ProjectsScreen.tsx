import React, { useEffect } from 'react';
import './ProjectsScreen.styles.sass';
import { useTranslation } from 'react-i18next';
import { GlassCard } from '@/components/GlassCard/GlassCard.tsx';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { projectsSides } from '@/screens/ProjectsScreen/constants.ts';

export const ProjectsScreen: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      loop: true,
      modules: [Pagination],
    });

    return (): void => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <section className="projects-screen">
      <div className="project-details">
        <GlassCard className="project-details__container">
          <h1>{t('projects.title')}</h1>
          <p>{t('projects.description')}</p>
          <a href="https://gitlab.com/polisukandrij68/f5remont_3">{t('projects.checkSrc')}</a>
        </GlassCard>
        <GlassCard className="project-details__container">
          <h1>{t('projects.bot.title')}</h1>
          <p>{t('projects.bot.description')}</p>
          <a href="https://gitlab.com/polisukandrij68/f5remont-bot">{t('projects.checkSrc')}</a>
        </GlassCard>
      </div>
      <div className="swiper">
        <div className="swiper-wrapper">
          {projectsSides.map((slide, index) => (
            <GlassCard className="swiper-slide" key={slide.id}>
              <img src={slide.src} alt={t('projects.slideAlt', { slideNo: index + 1 })} />
            </GlassCard>
          ))}
        </div>
        <div className="swiper-pagination" />
      </div>
    </section>
  );
};
