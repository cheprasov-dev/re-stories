import React from 'react'
import {Alert, Avatar, Snackbar} from "@vkontakte/vkui"
import {closeAlert, openAlert, setSnackbarSetting} from "../../redux/actionCreators/alertsActionCreators"
import {errorMassage} from "../../redux/constants/errorConstants"
import Icon16CheckCircle from '@vkontakte/icons/dist/16/check_circle'
import Icon16ErrorCircleOutline from '@vkontakte/icons/dist/16/error_circle_outline'
import {mainRoute} from "../../redux/actionCreators/rouitingActionCreators";
import {
  PANEL_CONTEST,
  PANEL_CONTESTS_GROUP,
  PANEL_SELECTION_STATUS, VIEW_CONTEST,
  VIEW_ORGANIZER,
  VIEW_STATUS
} from "../../redux/constants/routingConstants";
import {addContestModule} from "../addContestModule";
import {switchIsLoadFlag} from "../../redux/actionCreators/flagsActionCreators";
import {resetSettingsContest} from "../../redux/actionCreators/dataSettingsContestActionCreators";

export function openAlertErrorSettings(error, dispatch) {
  const alert = (
    <Alert
      actionsLayout="vertical"
      actions={[{
        title: 'OK',
        autoclose: true,
        mode: 'cancel'
      }]}
      onClose={() => dispatch(closeAlert())}
    >
      <h2>Ошибка в настройках</h2>
      <p>{errorMassage[error].text}</p>
    </Alert>
  )
  dispatch(openAlert(alert))
}

export function openAlertArbitraryError(message, dispatch) {
  const alert = (
    <Alert
      actionsLayout="vertical"
      actions={[{
        title: 'OK',
        autoclose: true,
        mode: 'cancel'
      }]}
      onClose={() => dispatch(closeAlert())}
    >
      <h2>Ошибка</h2>
      <p>{message}</p>
    </Alert>
  )
  dispatch(openAlert(alert))
}

export function openAlertDataLossWarning(dispatch, action) {
  const alert = (
    <Alert
      actionsLayout="horizontal"
      actions={[{
        title: 'Отменить',
        autoclose: true,
        mode: 'cancel'
      }, {
        title: 'Выйти',
        autoclose: true,
        mode: 'destructive',
        action: action
      }]}
      onClose={() => dispatch(closeAlert())}
    >
      <h2>Подтвердите действие</h2>
      <p>Если вы покинете страницу, все данные будут утеряны</p>
    </Alert>
  )
  dispatch(openAlert(alert))
}

export function openAlertSaveWarning(dispatch, idUser, idGroup, allSettingsContest, moderationStatus, idActiveContest) {
  const alert = (
    <Alert
      actionsLayout="horizontal"
      actions={[{
        title: 'Отменить',
        autoclose: true,
        mode: 'cancel'
      }, {
        title: 'Запустить',
        autoclose: true,
        mode: 'commerce',
        action: () => addContestModule(dispatch, idUser, idGroup, allSettingsContest, moderationStatus, idActiveContest)
      }]}
      onClose={() => dispatch(closeAlert())}
    >
      <h2>Внимание!</h2>
      <p>
        После сохранения данных, конкурс отправится на модерацию.  <br/>
        Во время модерации конкурса вносить изменения будет запрещено. <br/>
        В случае замечаний от модератора вы сможете внести правки.
      </p>
    </Alert>
  )
  dispatch(openAlert(alert))
}

export function openAlertGetToken(dispatch) {
  const alert = (
    <Alert
      actionsLayout="horizontal"
      actions={[{
        title: 'Отменить',
        autoclose: true,
        mode: 'cancel',
        action: () => dispatch(mainRoute(VIEW_STATUS, PANEL_SELECTION_STATUS))
      }, {
        title: 'Хорошо',
        autoclose: true,
        mode: 'commerce',
        action: () => {
          dispatch(switchIsLoadFlag('isAllowedToUploadToken', true))
        }
      }]}
      onClose={() => {
        dispatch(closeAlert())
      }}
    >
      <h2>Запрос данных</h2>
      <p>Для отображения подключенных групп требуется разрешение на получения данных о сообществах</p>
    </Alert>
  )
  dispatch(openAlert(alert))
}

export function openSnackbarFileLoading(dispatch) {
  const snackbar = (
    <Snackbar
      duration={2000}
      layout="vertical"
      onClose={() => dispatch(setSnackbarSetting(null))}
      before={
        <Avatar size={24} style={{backgroundColor: '#713CF0'}}>
          <Icon16CheckCircle fill="#fff" width={16} height={16}/>
        </Avatar>}
    >
      Изображение добавлено
    </Snackbar>
  )
  dispatch(setSnackbarSetting(snackbar))
}

export function openSnackbarErrorLengthInput(dispatch, length) {
  const snackbar = (
    <Snackbar
      duration={2000}
      layout="vertical"
      onClose={() => dispatch(setSnackbarSetting(null))}
      before={
        <Avatar size={24} style={{backgroundColor: '#713CF0'}}>
          <Icon16ErrorCircleOutline fill="#fff" width={16} height={16}/>
        </Avatar>}
    >
      Максимальная длина {length}
    </Snackbar>
  )
  dispatch(setSnackbarSetting(snackbar))
}
