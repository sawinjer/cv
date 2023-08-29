import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Skill } from '@/screens/SkillsScreen/interfaces.ts';
import { GlassCard } from '@/components/GlassCard/GlassCard.tsx';
import { useTranslation } from 'react-i18next';

interface Props {
  skill: Skill;
  index: number;
  originIndex: number;
  originOffset: React.MutableRefObject<{ top: number; left: number }>;
}

const delayPerPixel = 0.0008;

export const SkillBox: React.FC<Props> = ({ skill, index, originIndex, originOffset }) => {
  const { t } = useTranslation();

  const delayRef = useRef(0);
  const offset = useRef({ top: 0, left: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;

    offset.current = {
      top: element.offsetTop,
      left: element.offsetLeft,
    };

    if (index === originIndex) {
      originOffset.current = offset.current;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const dx = Math.abs(offset.current.left - originOffset.current.left);
    const dy = Math.abs(offset.current.top - originOffset.current.top);
    const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

    delayRef.current = d * delayPerPixel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div className="skill-box" ref={ref} variants={itemVariants} custom={delayRef}>
      <GlassCard className="skill-box-content">
        <img src={skill.iconSrc} alt={skill.title} />
        <div className="skill-description">
          <div className="skill-description-content">
            <div>
              <h4 className="skill-title">{skill.title}</h4>
              <h4 className="skill-level">{t(`skills.level.${skill.level}`)}</h4>
            </div>
            <a href={skill.link} className="skill-link" target="_blank" rel="noreferrer">
              {t('skills.skillLinkText')}
            </a>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: (delayRef: { current: number }) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: delayRef.current },
  }),
};
