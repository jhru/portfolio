import React from 'react'
import styles from './styles.module.scss'
import { Button, Title, Text } from '../../components/_components'

export const Description = data => {
    const { title, content, link } = data
    return (
        <div className={styles.description}>
            <Title type={'h1'} title={title} />
            <Button type={'vertical'} title={'назад'} action={['int', link]} />
            <Text prefix={'description'} content={content} />
        </div>
    )
}
