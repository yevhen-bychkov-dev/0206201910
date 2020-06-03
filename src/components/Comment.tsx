import React from 'react';

type Props = {
  name: string;
  text: string;
  date: string;
}

export const Comment: React.FC<Props> = ({ name, text, date }) => {
  return (
    <div className="comment">
      <h3 className="comment__title">{name}
        <span className="comment__subtitle">
          {date}
        </span>
      </h3>
      <p className="comment__text">
        {text}
      </p>
    </div>
  )
}
