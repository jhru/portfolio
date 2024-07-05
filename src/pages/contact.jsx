import React from 'react'
import { DATA_DB } from '../data/_data'
import { addTimeoutedLoader } from '../helpers/_helpers'
import { Description, Project } from '../modules/_modules'
import { Meta, Loader } from '../components/_components'

export const Contact = ({ meta }) => {
    const [moduleStatus, setModuleStatus] = React.useState('loading')

    const options = {
        title: DATA_DB.main.contact.title,
        description: DATA_DB.main.contact.description,
        list: DATA_DB.main.contact.content,
        mapList: element => (
            <Project
                key={element.work}
                data={{ type: 'contact', ...element }}
            />
        )
    }

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
            return (
                <>
                    <Meta data={meta} />
                    <Description
                        title={options.title}
                        content={options.description}
                        link={'/'}
                    />
                    {options.list.map(options.mapList)}
                </>
            )
        default:
            break
    }
}
