import React from 'react';

interface Props {
  title: string;
  value: string;
}

export const ShortInfoRow: React.FC<Props> = ({ title, value }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};
