import React from 'react';
import styles from "./BannerContest.module.css";




export default function BannerContest (props) {
    const { urlBanner, } = props
    const styleBanner = {
        background: `url("${urlBanner}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }
    
    return (
        <React.Fragment>
            <div className={styles.component_banner} >
                <div style={{ ...styleBanner }} className={styles.banner}/>
            </div>
        </React.Fragment>
    )
}