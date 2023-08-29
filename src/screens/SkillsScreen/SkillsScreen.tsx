import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './SkillsScreen.styles.sass';
import { skills } from '@/screens/SkillsScreen/constants.ts';
import { SkillBox } from '@/screens/SkillsScreen/SkillBox.tsx';
import { ScreenBackgroundText } from '@/components/ScreenBackroundText/ScreenBackgroundText.tsx';
import { useTranslation } from 'react-i18next';

export const SkillsScreen: React.FC = () => {
  const { t } = useTranslation();
  const originOffset = useRef({ top: 0, left: 0 });

  return (
    <motion.section className="skills-screen" initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <ScreenBackgroundText title={t('skills.title')} />
      {skills.map((skill, index) => (
        <SkillBox key={skill.id} skill={skill} index={index} originIndex={26} originOffset={originOffset} />
      ))}
    </motion.section>
  );
};
