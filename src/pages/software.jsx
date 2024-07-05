import React from 'react'
import { DATA_DB } from '../data/_data'
import { addTimeoutedLoader } from '../helpers/_helpers'
import { Description } from '../modules/_modules'
import { Meta, Loader, Button } from '../components/_components'

export const Software = ({ meta }) => {
    const [moduleStatus, setModuleStatus] = React.useState('loading')

    const options = {
        title: DATA_DB.main.software.title,
        description: DATA_DB.main.software.description,
        list: Object.entries(DATA_DB.utility),
        mapList: ([work, element]) => (
            <Button
                key={work}
                type={'tile'}
                action={['int', `/software/${work}`]}
                title={element.title}
                desc={element.about}
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
