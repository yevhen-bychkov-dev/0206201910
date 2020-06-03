import React, {useEffect, useState} from 'react';
import './App.scss';
import { CardInfo } from './components/CardInfo';
import  { Comment } from './components/Comment';

const person = {
  name: 'Вероника Ростова',
  job: 'Менеджер по продажам',
  photo: 'img/face.png',
  description: 'Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны',
  services: [
    {name: 'Ручное бронирование', quantity: 11, color: 'green'},
    {name: 'Пакетные туры', quantity: 3, color: 'blue'},
    {name: 'Отели', quantity: 1, color: 'blue'},
  ],
  comments: [
    {
      name: 'Самуил',
      date: '13 октября 2011',
      text: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!'
    },
    {
      name: 'Лилия Семёновна',
      date: '14 октября 2011',
      text: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?'
    },
    {
      name: 'Лилия Семёновна',
      date: '14 октября 2011',
      text: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?'
    },
  ],
};

const App = () => {

  const [maxServices, setMaxServices] = useState<number>(0)
  const [currentText, setCurrentText] = useState<string>('')
  const [currentComments, setCurrentComments] = useState<Comment[]>([])

  const changeMessage = (event: { target: { value: string; } }) => {
    const target = event.target.value;

    setCurrentText(target)
  }

  const addPostWithKeys = (e: any) => {
    if (e.ctrlKey && e.keyCode === 13) {
      submitForm()
    }
  }

  const submitForm = () => {
    if(!currentText.trim()) {
      return;
    }

    const newMessages = [
      ...currentComments,
      {
        name: 'Гость',
        date: 'сегодня',
        text: currentText,
      }
    ]

    // @ts-ignore
    setCurrentComments(newMessages)

    setCurrentText('');
  }

  const getMaxServices = () => {
    let result: number = 0;

    person.services.forEach(item => result += item.quantity)

    return result;
  }

  useEffect(() => {
    // @ts-ignore
    setCurrentComments(person.comments)
  }, [])

  useEffect(() => {
    setMaxServices(getMaxServices())
  }, [maxServices])

  return (
    <article className="card">
      <div className="card__container">
        <CardInfo
          services={person.services}
          maxServices={maxServices}
          photo={person.photo}
          name={person.name}
          job={person.job}
          description={person.description}
        />
        <div className="card-reviews">
          <div className="card-reviews__top">
            <div className="card-reviews__left">
            <span className="card-reviews__title">
              Последние отзывы
            </span>
              <a href="#" className="card-reviews__subtitle">
                Все отзывы
              </a>
            </div>
            <div className="card-reviews__right">
              <span className="card-reviews__like">
                <img
                  src="img/like.png"
                  alt="like"
                  className="card-reviews__img"
                />
                131
              </span>
                <span>
                <img
                  src="img/comment.png"
                  alt="comment"
                  className="card-reviews__img"
                />
                14
              </span>
            </div>
          </div>
          <div className="card-reviews__bottom">
            {
              currentComments.map(item => (
                <Comment
                  key={item.text}
                  name={item.name}
                  text={item.text}
                  date={item.date}
                />
              ))
            }
          </div>
        </div>
        <form
          className="form"
        >
          <div className="form__container">
            <textarea
              onChange={changeMessage}
              onKeyDown={addPostWithKeys}
              className="form__text"
              value={currentText}
              required
            />
            <button
              type='button'
              className="form__button"
              onClick={submitForm}
            >
              Написать консультанту
            </button>
          </div>
        </form>
      </div>
    </article>
  );
}

export default App;
