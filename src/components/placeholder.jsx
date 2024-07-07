import React from 'react'
import styles from './styles/styles.module.scss'

export const Placeholder = () => {
    return (
        <div className={styles.placeholder}>
            <p>
                Текущий размер экрана не позволяет отобразить проект удобным
                образом.
            </p>
        </div>
    )
}
