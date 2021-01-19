import React from 'react'
import css from './ErrorPage.module.scss'
import { PanelHeader } from '@vkontakte/vkui'
import { Background, ButtonCustom } from '../../exportCommon'
import { useDispatch } from 'react-redux'
import { useFirstPageCheck, useRouter } from '@happysanta/router'
import { setMainError } from '../../../../redux/reducers/errorsReducer'
import { PAGE_TOPICS } from '../../../../redux/constants/routingConstants'

/*
  Диспачить типы ошибок и в контейнере получать
  тип ошибок и отрабатывать вывод соответсвующего тексата
*/

export default function ErrorPage ({ isInitError }) {
  const router = useRouter()
  const isFirstPage = useFirstPageCheck()
  let dispatch = useDispatch()

  function onClickBack () {
    if (isFirstPage) router.pushPage(PAGE_TOPICS)
    else router.popPage()
    dispatch(setMainError(null))
  }

  return (
    <>
      <PanelHeader separator={false}>Ошибка!</PanelHeader> {/* шапка */}
      <div className={css.container_page}> {/* контейнер для контента */}
        <Background imgBG={true} /> {/* фон */}
        {!isInitError && <ButtonCustom /* кнопка */
          background={'#14CEDF'}
          text={isFirstPage ? 'На главную' : 'Вернуться назад'}
          onClick={onClickBack}
        />}

        {isInitError && (<>
          <div className={css.mainText}>ОШИБКА ДОСТУПА!!!</div>

          <br/>

          <div className={css.textError}>
            Сбросте кеш приложения. <br/> Если ошибка сохранится свяжитесь с владельцем сервиса
          </div>

          <br/>

          <div className={css.textError}>
            <u>Сейчас вам закрыт доступ к приложению</u>
          </div>
        </>)}

        {/*<div>*/}
        {/*  Если проблема не решена, свяжитесь с*/}
        {/*  <a ref='https://vk.com/id10127186' target='_blank' rel="nofollow" >Александром</a>*/}
        {/*</div>*/}
        {/*
          TODO настроить переход по ссылке
         */}
      </div>
    </>
  )
}
