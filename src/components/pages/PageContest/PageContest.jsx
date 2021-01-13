import React from 'react'
import { useSelector } from 'react-redux'

import ContentContest from './ContentContest/ContentContest'
import { LoadingPage } from '../../common/exportCommon'
import ErrorContest from './ErrorContest/ErrorContest'
import usePageContest from './usePageContest'

export default function PageContest () {
  const dataActiveContest = useSelector(state => state.dataContests.dataActiveContest)
  const errorGetDataContest = useSelector(state => state.errors.errorGetDataContest)
  usePageContest()

  return (
    <React.Fragment>
      {errorGetDataContest
        ? <ErrorContest /> // ошибка
        : <React.Fragment>
          {dataActiveContest
            ? dataActiveContest.moderationStatus === 1
              ? <ContentContest /> // основная информация
              : <ErrorContest />
            : <LoadingPage imgBG={true} />} {/* загрузка*/}
        </React.Fragment>
      }
    </React.Fragment>
  )
}
