import React from 'react';
import styles from "./BannerContest.module.css";

export default function BannerContest(props) {
  const {urlBanner,} = props
  const styleBanner = {
    backgroundImage: `url("${urlBanner}")`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backdropFilter: 'blur(8px)',
    '-webkit-backdrop-filter': 'blur(8px)'
  }
  const styleBanner2 = {
    backgroundImage: `url("${urlBanner}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <React.Fragment>
      <div style={{...styleBanner2}} className={styles.component_banner}>
        <div style={{...styleBanner}} className={styles.banner}/>
      </div>
    </React.Fragment>
  )
}
