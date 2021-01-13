import { useSelector, useDispatch } from 'react-redux'
import { upgradeDataUser } from '../redux/actionCreators/dataUserActionCreators'
import { setErrorData, setErrorInitUser } from '../redux/actionCreators/errorsActionCreators'
import { useEffect } from 'react'
import { createDataError } from '../modules/functions/createDataError'
import { addUserAPI } from '../modules/API/server/addUserAPI'
import { getDataUserBridge } from '../modules/API/bridge/getDataUserBridge'
import { PAGE_TRAINING_CONTESTS } from '../redux/constants/routingConstants'
import { useRouter } from '@happysanta/router'

/*
    Модуль по инициализации пользователя
*/

export function useClientIdentification () {
  const dataUser = useSelector(state => state.dataUser.mainData)
  const router = useRouter()

  const dispatch = useDispatch()

  useEffect(() => {
    (async function () {
      try {
        if (!dataUser) {
          const dataUser = await getDataUserBridge()
          const { data: { error, error_type, new_user: newUser } } = await addUserAPI(dataUser.id)
          if (error) {
            const errorObj = createDataError(error_type, 'api', 'error init user')
            dispatch(setErrorData(errorObj))
            dispatch(setErrorInitUser(error))
          } else {
            let isViewTraining = false
            if (newUser && !isViewTraining) router.pushPage(PAGE_TRAINING_CONTESTS)
            dispatch(upgradeDataUser(dataUser, newUser, isViewTraining)) // записываем данные пользователя
          }
        }

      } catch (error) {
        const errorObj = createDataError(error, 'catch', 'error init user')
        dispatch(setErrorData(errorObj))
        dispatch(setErrorInitUser(true))
      }
    })()
  }, [])
}
