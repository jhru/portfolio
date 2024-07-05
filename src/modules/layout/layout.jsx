import React from 'react'
import styles from './styles.module.scss'
import { Hamburger } from '../../components/_components'

export const Header = () => {
    return (
        <div className={styles.header}>
            <Hamburger />
        </div>
    )
}

export const Footer = () => {
    return <div className={styles.footer} />
}
