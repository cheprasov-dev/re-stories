import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import _isNaN from 'lodash/isNaN'
import styles from './TimerContest.module.scss'
import {getDataContestAPI} from "../../../modules/API/server/getDataContestAPI";
import {setDataActiveContest} from "../../../redux/actionCreators/dataContestsActionCreators";
import {useDispatch} from "react-redux";
import {setErrorGetDataContest} from "../../../redux/actionCreators/errorsActionCreators";
import {closeModalPage} from "../../../redux/actionCreators/rouitingActionCreators";
import {TaskTimer} from "tasktimer";
import {requestWrapper} from "../../../modules/functions/requestWrapper";

function convertTime(timestamp) { // переводит общее количества секунд в формат 00:00:00
  if (_isNaN(timestamp)) return ['ЧЧ', 'ММ', 'СС']
  else if (timestamp < 0) return ['00', '00', '00']

  let hours = Math.floor(timestamp / 60 / 60)
  let minutes = Math.floor(timestamp / 60) - (hours * 60)
  let seconds = timestamp % 60
  return [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0')
  ]
}

export default function TimerContest(props) {
  const {flagEndContest = true, value, idActiveContest, idUser, moderationStatus} = props
  const [timer, setTimer] = useState(value - (Math.round(new Date() / 1000) + 3600 * 3))
  const [timerData, setTimerData] = useState(convertTime(timer))
  const dispatch = useDispatch()

  useEffect(() => {
      const timerObj = new TaskTimer(1000);
      timerObj.on('tick', () => {
        const tick = timer - timerObj.tickCount
        setTimer(tick)
        if (flagEndContest && timer - timerObj.tickCount <= 0 && moderationStatus === 1) {
          (async function () {
            const {data: {error, contest}, catchError: {isError}} = await requestWrapper(getDataContestAPI, {
              idContest: idActiveContest, idUser})
            if (!error && !isError) {
              dispatch(closeModalPage())
              dispatch(setDataActiveContest(contest))
            }
            else dispatch(setErrorGetDataContest(error))
            timerObj.stop()
          })()

        } else if (timer - timerObj.tickCount <= 0 && moderationStatus !== 1) {
          timerObj.stop();
        }
      });
      timerObj.start();
  }, [])

  useEffect(() => {
    setTimerData(convertTime(timer))
  }, [timer])

  return (
    <>
      {flagEndContest
        ? (
          <>
            <div className={styles.end_competition}>
              <div className={styles.text_end}>До завершения конкурса:</div>
              <div className={styles.timer}>
                <div className={styles.img_timer}/>
                <div className={styles.text_timer}>{timerData[0]}:{timerData[1]}:</div>
              </div>
              <span className={styles.seconds}>{timerData[2]}</span>
            </div>
          </>
        )
        : (
          <div className={styles.time_end}>
            Конкурс завершен
          </div>
        )
      }
    </>
  )
}

TimerContest.propTypes = {
  flagEndContest: PropTypes.bool,
  value: PropTypes.number,
}
