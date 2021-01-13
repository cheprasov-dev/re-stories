import React, {useEffect} from 'react'
import {PanelHeader} from "@vkontakte/vkui";
import {Background} from "./components/common/exportCommon";
import {closeModalPage} from "./redux/actionCreators/rouitingActionCreators";
import {upgradeTextSearchForModal} from "./redux/actionCreators/otherDataActionCreators";
import {useDispatch} from "react-redux";
import {closeAlert} from "./redux/actionCreators/alertsActionCreators";
import {resetConditionsStatuses, resetDataActiveContest} from "./redux/actionCreators/dataContestsActionCreators";
import {setErrorGetDataContest} from "./redux/actionCreators/errorsActionCreators";

const css = {
  container_page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '90vh'
  },
  errorText: {
    fontWeight: 500,
    fontSize: '20px',
    color: '#fff',
    textAlign: 'center',
  }
}

export default function ErrorNet() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeModalPage())
    dispatch(closeAlert())
    dispatch(resetDataActiveContest())
    dispatch(upgradeTextSearchForModal(''))
    dispatch(resetConditionsStatuses())
    dispatch(setErrorGetDataContest(false))
  }, [])
  return (
    <React.Fragment>
      <PanelHeader separator={false}>Отсутсует сеть!</PanelHeader> {/* шапка */}
      <div style={css.container_page}> {/* контейнер для контента */}
        <Background imgBG={true}/> {/* фон */}
        <div style={css.errorText}>Отсутствует сетевое подключение! <br/> Проверьте подключение к сети...</div>
      </div>
    </React.Fragment>
  )
}

ErrorNet.propTypes = {}
