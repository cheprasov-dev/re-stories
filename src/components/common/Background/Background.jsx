import React from 'react';
import css from "./Background.module.css";
import PropTypes from 'prop-types'
/*
    Описание:
        Компонент возвращает jsx разметку содержащая фон. В зависимости от пропсов фон будет с фото или нет
        (тупой компонент)
    Принимает:
        imgBG - true/false
    Возвращает:
        jsx
*/

export default function Background (props) {
    const { imgBG } = props
    return (
        <React.Fragment>
            <div className={css.background_color} />
            {imgBG ? <div className={css.background_img} /> : null}
        </React.Fragment>
    )
}

Background.propTypes = {
  imgBG: PropTypes.bool
}
