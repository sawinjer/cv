import React from 'react';
import { RunningText } from '@/components/RunningText/RunningText.tsx';
import './ScreenBackgroundText.styles.sass';

interface Props {
  title: string;
}

export const ScreenBackgroundText: React.FC<Props> = ({ title }) => {
  return (
    <div className="screen-background-text">
      <div className="screen-background-text__text_wrapper">
        <RunningText velocity={1}>
          <h1 className="screen-background-text__title">{title}</h1>
        </RunningText>
      </div>
    </div>
  );
};
