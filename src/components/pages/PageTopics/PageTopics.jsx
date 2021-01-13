import React from 'react'
import { useSelector } from 'react-redux'

import {usePageTopics} from './usePageTopics'
import ContentTopics from "./ContentTopics/ContentTopics";
import {LoadingPage} from "../../common/exportCommon";
import ErrorTopics from "./ErrorTopics/ErrorTopics";

function PageTopics () {

  // const dataPopularContests = useSelector(state => state.dataContests.dataPopularContests)
  const idsTopicsWithContests = useSelector(state => state.dataContests.idsTopicsWithContests)
  let errorPageTopics = useSelector(state => state.errors.errorPageTopics)

  usePageTopics()

  return (
    <React.Fragment>
      {errorPageTopics
        ? <ErrorTopics /> // TODO сделать отработку ошибки
        : <React.Fragment>
          {idsTopicsWithContests
            ? <ContentTopics /> // основная информация
            : <LoadingPage imgBG={true} /> /* загрузка */}
        </React.Fragment>
      }
    </React.Fragment>
  )
}

export default PageTopics
