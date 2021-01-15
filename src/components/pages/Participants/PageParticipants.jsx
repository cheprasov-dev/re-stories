import React from 'react'
import { useGetParticipants } from './useGetParticipants'
import { LoadingPage } from '../../common/exportCommon'
import ContentParticipants from './ContentParticipants/ContentParticipants.jsx'
import { useSelector } from 'react-redux'
import ErrorPage from '../../common/_pages/ErrorPage/ErrorPage'

function PageParticipants () {
  const dataParticipants = useSelector(state => state.dataContests.dataParticipants)
  const mainError = useSelector(state => state.errors.mainError)
  useGetParticipants()

  return (
    <>
      {mainError
        ? <ErrorPage />
        : dataParticipants
          ? <ContentParticipants />
          : <LoadingPage imgBG={true} />
      }
    </>
  )
}

export default PageParticipants
