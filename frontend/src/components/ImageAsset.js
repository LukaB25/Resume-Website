import React from 'react';

import styles from '../styles/ImageAsset.module.css';

function ImageAsset({ src, alt }) {
  return (
    <div className={styles.ImageContainer}>
      <img
        className={styles.Image}
        src={src} alt={`${alt} website`} />
    </div>
  )
}

export default ImageAsset
