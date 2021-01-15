import React from 'react'
import {PanelHeader} from "@vkontakte/vkui";
import {Background} from "./components/common/exportCommon";

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
