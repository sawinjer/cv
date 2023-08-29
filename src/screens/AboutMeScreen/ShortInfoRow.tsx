import React from 'react';

interface Props {
  title: string;
  value: string;
}

export const ShortInfoRow: React.FC<Props> = ({ title, value }) => {
  return (
    <div className="short-info__row">
      <h3 className="short-info__row-title">{title}</h3>
      <div className="short-info__row-value">
        {value.split('\n').map((valueRow) => (
          <span key={valueRow}>{valueRow}</span>
        ))}
      </div>
    </div>
  );
};
