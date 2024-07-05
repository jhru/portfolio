import React from 'react'
import styles from './styles/styles.module.scss'

export const Coin = data => {
    return (
        <div className={styles.coin}>
            <h3>{data.title}</h3>
            <p className={styles.plus}>{data.plus}</p>
            <p className={styles.minus}>{data.minus}</p>
        </div>
    )
}
