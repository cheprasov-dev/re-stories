import React from 'react';
import css from './PlaceholderCustom.module.css'
import { ButtonCustom } from '../../../exportCommon'

/* (тупой компонент)
    Описание:
        Плацхолдер
    Принимает:
        text - текст,
        textButton - текст кнопки,
        onClick - исполняющая функция при нажатии на кнопку,
    Возвращает:
        jsx
*/

export default function PlaceholderCustom (props) {
    const { text, onClick, textButton=false, disabled } = props;
    return (
        <div className={css.center_container}>
          <div className={css.container}>
            <div className={css.div_logo} />
            <div className={css.name_app}>ReStories</div>
          </div>
            <div className={css.text}>{text}</div>
            {textButton ? <ButtonCustom
                background={'#14CEDF'}
                disabled={disabled}
                text={textButton}
                onClick={ onClick }
            /> : null}
        </div>
    )
}
