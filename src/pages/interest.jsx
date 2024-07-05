import React from 'react'
import styles from './styles/styles.module.scss'
import { DATA_DB } from '../data/_data'
import { addTimeoutedLoader } from '../helpers/_helpers'
import { Meta, Loader } from '../components/_components'
import { Description, Project } from '../modules/_modules'

export const Interest = ({ meta, type }) => {
    const [moduleStatus, setModuleStatus] = React.useState('loading')
    const [data, setData] = React.useState({
        description: null,
        list: null
    })

    const options = {
        content: Object.entries(DATA_DB.utility),
        mapList: element => (
            <Project
                key={`showcase-${element.work}`}
                data={{ type: data.type, ...element }}
            />
        )
    }

    React.useEffect(() => {
        setModuleStatus('loading')
        setData({
            type: type,
            title: DATA_DB.interest[type].title,
            description: DATA_DB.interest[type].description,
            list: DATA_DB.interest[type].showcase
        })
        addTimeoutedLoader(500, setModuleStatus, 'ready')
    }, [type])

    switch (moduleStatus) {
        case 'loading':
            return (
                <>
                    <Meta data={meta} />
                    <Loader />
                </>
            )
        case 'ready':
            return (
                <>
                    <Meta data={meta} />
                    <Description
                        title={data.title}
                        content={data.description}
                        link={'/'}
                    />
                    {data.list.map(options.mapList)}
                </>
            )
        default:
            break
    }
}
