import React from 'react'
import { Helmet } from 'react-helmet'

export const Meta = ({ data }) => {
    const { title, meta } = data
    const prefix = '[ jhru ]'
    return (
        <Helmet>
            <title>{prefix + ' ' + data.title}</title>
            <meta name="description" content={data.meta.description} />
            <meta name="keywords" content={data.meta.keywords} />
        </Helmet>
    )
}
