import React from 'react';
import cn from 'classnames';
import '../App.scss';

type Props = {
  name: string;
  counter: number;
  max: number;
  color: string;
}

export const Service: React.FC<Props> = ({ name, counter, max, color }) => {
  const maxWidth = counter/max * 100;

  const styleWidthObj = {
    width: `${maxWidth}%`,
  }

  return (
    <div className="card-info__service">
      <span className="card-info__subtext">{name}</span>
      <span className="card-info__counter">{counter}</span>
      <div className={cn('card-info__bg', color)} style={styleWidthObj}> </div>
    </div>
  )
}
