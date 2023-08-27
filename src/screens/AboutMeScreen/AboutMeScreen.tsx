import React from 'react';
import './AboutMeScreen.styles.sass';
import { GlassCard } from '@/components/GlassCard/GlassCard.tsx';
import { useTranslation } from 'react-i18next';

export const AboutMeScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="about-me-screen">
      <GlassCard className="short-info">
        <h2>{t`aboutMe.shortInfo.title`}</h2>
      </GlassCard>
    </section>
  );
};
