import React from 'react'
import styles from './Header.module.css';
import resume from '../../assets/resume.svg';

const header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <p className={styles.heading}>
                A <span>Resume</span> that stands out!
            </p>
            <p className={styles.heading}>
                Make your own resume.
                For <span>Free</span>.
            </p>
        </div>
        <div className={styles.right}>
            <img src={resume} alt="Resume" />
        </div>
    </div>
  )
}

export default header