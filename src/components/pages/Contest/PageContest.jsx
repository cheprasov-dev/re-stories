import React from 'react'
import { useSelector } from 'react-redux'

import ContentContest from './ContentContest/ContentContest'
import { LoadingPage } from '../../common/exportCommon'
import usePageContest from './usePageContest'
import ErrorPage from '../../common/_pages/ErrorPage/ErrorPage'
import _isNull from 'lodash/isNull'

export default function PageContest () {
  const dataActiveContest = useSelector(state => state.dataContests.dataActiveContest)
  const mainError = useSelector(state => state.errors.mainError)
  usePageContest()

  return (
    <React.Fragment>
      {!_isNull(mainError)
        ? <ErrorPage /> // ошибка
        : <React.Fragment>
          {dataActiveContest
            ? dataActiveContest.moderationStatus === 1
              ? <ContentContest /> // основная информация
              : <ErrorPage />
            : <LoadingPage imgBG={true} />} {/* загрузка*/}
        </React.Fragment>
      }
    </React.Fragment>
  )
}
