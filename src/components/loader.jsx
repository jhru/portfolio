import React from 'react'
import styles from './styles/styles.module.scss'

export function Loader() {
    return (
        <div className={styles.loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
