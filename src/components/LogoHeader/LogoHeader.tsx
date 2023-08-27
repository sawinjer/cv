import React from 'react';
import logoImgSource from '@assets/logo.svg';
import './LogoHeader.styles.sass';

export const LogoHeader: React.FC = () => {
  return (
    <header className="logo-header">
      <img className="icon" src={logoImgSource} alt="logo" />
    </header>
  );
};
