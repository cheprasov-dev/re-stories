import animals from './../../assets/img/cards/animals.jpeg'
import art from './../../assets/img/cards/art.jpeg'
import auto from './../../assets/img/cards/auto.jpeg'
import beauty from './../../assets/img/cards/beauty.jpeg'
import bloggers from './../../assets/img/cards/bloggers.jpeg'
import brands from './../../assets/img/cards/brands.jpeg'
import entertainment from './../../assets/img/cards/entertainment.jpeg'
import food from './../../assets/img/cards/food.jpeg'
import games from './../../assets/img/cards/games.jpeg'
import medicine from './../../assets/img/cards/medicine.png'
import music from './../../assets/img/cards/music.jpeg'
import news from './../../assets/img/cards/news.jpeg'
import radio from './../../assets/img/cards/radio.jpeg'
import science from './../../assets/img/cards/science.jpeg'
import shops from './../../assets/img/cards/shops.jpeg'
import sport from './../../assets/img/cards/sport.jpeg'
import travels from './../../assets/img/cards/travels.jpeg'
import trainingContests from '../../assets/img/trainingContests.png'
import trainingConditions from '../../assets/img/trainingConditions.png'
import trainingPrizes from '../../assets/img/trainingPrizes.png'
import {
  PAGE_TOPICS,
  PAGE_TRAINING_CONDITIONS,
  PAGE_TRAINING_PRIZES,
} from './routingConstants'

export const topics = [
  { id: '0', name: 'Еда и рестораны', banner: food, },
  { id: '1', name: 'Животные', banner: animals, },
  { id: '2', name: 'Новости', banner: news, },
  { id: '3', name: 'Музыка', banner: music, },
  { id: '4', name: 'Бренды', banner: brands, },
  { id: '5', name: 'Образование', banner: science, },
  { id: '6', name: 'Развлечения', banner: entertainment, },
  { id: '7', name: 'Блогеры', banner: bloggers, },
  { id: '8', name: 'Магазины ', banner: shops, },
  { id: '9', name: 'Игры', banner: games, },
  { id: '10', name: 'Радио и TV ', banner: radio, },
  { id: '11', name: 'Искусство', banner: art, },
  { id: '12', name: 'Красота', banner: beauty, },
  { id: '13', name: 'Авто', banner: auto, },
  { id: '14', name: 'Спорт', banner: sport, },
  { id: '15', name: 'Медицина', banner: medicine, },
  { id: '16', name: 'Путешествия', banner: travels, },
]

export const arrTraining = {
  trainingContests: {
    title: 'Участвуй в конкурсах',
    image: trainingContests,
    textButton: 'Далее',
    nextPage: PAGE_TRAINING_CONDITIONS
  },
  trainingConditions: {
    title: 'Выполняй условия',
    image: trainingConditions,
    textButton: 'Далее',
    nextPage: PAGE_TRAINING_PRIZES
  },
  trainingPrizes: {
    title: 'Получай призы',
    image: trainingPrizes,
    textButton: 'Далее',
    nextPage: PAGE_TOPICS,
    end: true
  }
}
