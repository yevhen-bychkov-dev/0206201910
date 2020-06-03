import React from 'react';
import { Service } from './Service';

type Props = {
  services: Service[];
  maxServices: number;
  photo: string;
  name: string;
  job: string;
  description: string;
}

export const CardInfo: React.FC<Props> = (
  {
    services,
    maxServices,
    photo,
    name,
    job,
    description,
  }
  ) => {
  return (
    <div className="card-info">
      <img src={photo} alt="face" className="card-info__image"/>
      <div className="card-info__right">
        <h1 className="card-info__name">{name}</h1>
        <h2 className="card-info__job">{job}</h2>
        <p className="card-info__descr">{description}</p>
        <div className="card-info__services">
          <h3 className="card-info__subtitle">Услуг</h3>

          {
            services.map((item: Service) => (
              <Service
                key={item.name}
                name={item.name}
                counter={item.quantity}
                color={item.color}
                max={maxServices}
              />
            ))
          }
        </div>
        <div className="card-info__all">
          <span className="card-info__all--left">Всего</span>
          <span className="card-info__all--right">{maxServices}</span>
        </div>
      </div>
    </div>
  )
}
