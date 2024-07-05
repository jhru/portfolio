import React from 'react'
import styles from './styles/styles.module.scss'

export const Text = data => {
    const options = {
        mapText: (element, index) => {
            return (
                <p key={`${data.prefix}_${index}`} className={styles.text}>
                    {element}
                </p>
            )
        }
    }

    return data.content.map(options.mapText)
}
