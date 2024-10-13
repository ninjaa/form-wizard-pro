import React from 'react';
import './Teleprompter.scss';

interface TeleprompterProps {
  text: string;
}

export const Teleprompter: React.FC<TeleprompterProps> = ({ text }) => {
  return (
    <div className="teleprompter">
      <div className="teleprompter-content">{text}</div>
    </div>
  );
};
