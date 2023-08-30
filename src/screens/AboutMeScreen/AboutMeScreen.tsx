import React from 'react';
import { motion, Variants } from 'framer-motion';
import './AboutMeScreen.styles.sass';
import { GlassCard } from '@/components/GlassCard/GlassCard.tsx';
import { useTranslation } from 'react-i18next';
import { shortInfoRows } from '@/screens/AboutMeScreen/constants.ts';
import { ShortInfoRow } from '@/screens/AboutMeScreen/ShortInfoRow.tsx';
import { ScreenBackgroundText } from '@/components/ScreenBackroundText/ScreenBackgroundText.tsx';
import myPhotoSrc from '@assets/myPhoto.png';

export const AboutMeScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.section className="about-me-screen">
      <ScreenBackgroundText title={t('aboutMe.title')} />
      <motion.div
        initial="offScreen"
        whileInView="onScreen"
        viewport={{ once: true }}
        className="my-photo-wrapper"
        variants={photoVariant}
      >
        <img src={myPhotoSrc} alt={t`aboutMe.myPhotoImgAlt`} />
      </motion.div>
      <GlassCard
        className="short-info"
        initial="offScreen"
        whileInView="onScreen"
        viewport={{ once: true }}
        variants={descriptionVariants}
      >
        <h2 className="short-info-title">{t`aboutMe.shortInfo.title`}</h2>
        {shortInfoRows.map((rowKey) => (
          <ShortInfoRow
            key={rowKey}
            title={t(`aboutMe.shortInfo.${rowKey}`)}
            value={t(`aboutMe.shortInfo.values.${rowKey}`)}
          />
        ))}
      </GlassCard>
    </motion.section>
  );
};

const photoVariant: Variants = {
  offScreen: {
    opacity: 0,
    x: -100,
    rotateZ: -10,
  },
  onScreen: {
    opacity: 1,
    x: 0,
    rotateZ: 0,
  },
};

const descriptionVariants: Variants = {
  offScreen: {
    opacity: 0,
    x: 100,
    rotateZ: 10,
  },
  onScreen: {
    opacity: 1,
    x: 0,
    rotateZ: 0,
  },
};
