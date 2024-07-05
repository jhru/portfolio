import React from 'react'
import styles from './styles/styles.module.scss'
import { addTimeoutedLoader } from '../helpers/_helpers'
import { DATA_DB } from '../data/_data'
import { Meta, Loader, Text, Title } from '../components/_components'

export const Stop = ({ meta }) => {
    const [moduleStatus, setModuleStatus] = React.useState('loading')

    React.useEffect(() => {
        addTimeoutedLoader(500, setModuleStatus, 'ready')
    }, [])

    switch (moduleStatus) {
        case 'loading':
            return (
                <>
                    <Meta data={meta} />
                    <Loader />
                </>
            )
        case 'ready':
            const { title, description } = DATA_DB.main.stop
            return (
                <>
                    <Meta data={meta} />
                    <div className={styles.stop}>
                        <Title type={'h1'} title={title} />
                        <Text prefix={'stop'} content={description} />
                    </div>
                </>
            )
        default:
            break
    }
}
