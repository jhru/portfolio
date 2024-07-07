import React from 'react'
import styles from './styles/styles.module.scss'

const Title = data => {
    switch (data.type) {
        case 'h1':
            return <h1 className={styles.title_default}>{data.title}</h1>
        case 'h2':
            return <h2 className={styles.title_default}>{data.title}</h2>
        case 'h2_contact':
            return <h2 className={styles.title_contact}>{data.title}</h2>
        case 'h3':
            return <h3 className={styles.title_default}>{data.title}</h3>
        default:
            break
    }
}

export { Title }
