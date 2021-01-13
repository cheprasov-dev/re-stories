import React from 'react'
import styles from './IconPrize.module.css'

export default function IconPrize ({icon}) {
    return (
        <div className={styles.personal_account} style={{backgroundImage: `url('${icon}')`}}> </div>
    )
}
