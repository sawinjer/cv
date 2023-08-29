import React from 'react';
import './Contacts.styles.sass';
import emailIcon from '@assets/icons/emailIcon.svg';
import linkedInIcon from '@assets/icons/linkedInIcon.svg';
import gitlabIcon from '@assets/icons/gitlabIcon.svg';
import githubIcon from '@assets/icons/githubIcon.svg';
import telegramIcon from '@assets/icons/telegramIcon.svg';
import { useTranslation } from 'react-i18next';
import { GlassCard } from '@/components/GlassCard/GlassCard.tsx';

export const ContactsScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <GlassCard className="contacts-section">
      <h2 className="contacts-title">{t`contacts.contactMe`}</h2>
      <div className="contacts-icons-wrapper">
        <a className="contact-icon" href="mailto:polisukandrij68@gmail.com">
          <img src={emailIcon} alt={t('contacts.alt.email')} />
        </a>
        <a className="contact-icon" href="https://www.linkedin.com/in/sawinjer/">
          <img src={linkedInIcon} alt={t('contacts.alt.linkedIn')} />
        </a>
        <a className="contact-icon" href="https://gitlab.com/polisukandrij68">
          <img src={gitlabIcon} alt={t('contacts.alt.gitlab')} />
        </a>
        <a className="contact-icon" href="https://github.com/SawingJeracsus">
          <img src={githubIcon} alt={t('contacts.alt.github')} />
        </a>
        <a className="contact-icon" href="https://t.me/sawinjer">
          <img src={telegramIcon} alt={t('contacts.alt.telegram')} />
        </a>
      </div>
    </GlassCard>
  );
};
