import React from 'react'
import { LoadingPage } from '../../common/exportCommon'
import ContentPersonalAccount from './ContentPersonalAccount/ContentPersonalAccount'
import { useSelector } from 'react-redux'
import usePagePersonalAccount from './usePagePersonalAccount'
import ErrorPage from '../../common/_pages/ErrorPage/ErrorPage'

export default function PagePersonalAccount () {
  const abridgedDataContests = useSelector(state => state.dataContests.abridgedDataContests)
  const mainError = useSelector(state => state.errors.mainError)

  usePagePersonalAccount()

  return (
    <>
      {mainError
        ? <ErrorPage />
        : abridgedDataContests
          ? <ContentPersonalAccount /> // основная информация
          : <LoadingPage imgBG={true} /> /* загрузка */}

    </>
  )
}
