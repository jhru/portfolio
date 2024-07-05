import React from 'react'
import { addTimeoutedLoader } from '../helpers/_helpers'
import * as UTILITY from '../standalone/_utility'
import { Description } from '../modules/_modules'
import { Meta, Loader } from '../components/_components'
import { DATA_DB } from '../data/_data'

export const Utility = ({ meta, utility }) => {
    const [moduleStatus, setModuleStatus] = React.useState('loading')
    const [data, setData] = React.useState({
        description: null,
        utility: null
    })

    const options = {
        switchUtility: () => {
            switch (utility) {
                case 'string_generator':
                    return <UTILITY.StringGenerator />
                case 'material_weight':
                    return <UTILITY.MaterialWeight />
                case 'gradient_archive':
                    return <UTILITY.GradientArchive />
                default:
                    break
            }
        }
    }

    React.useEffect(() => {
        setModuleStatus('loading')
        setData({
            title: DATA_DB.utility[utility].title,
            description: DATA_DB.utility[utility].description
        })
        addTimeoutedLoader(500, setModuleStatus, 'ready')
    }, [utility])

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
                        link={'/software'}
                    />
                    {options.switchUtility()}
                </>
            )
        default:
            break
    }
}
