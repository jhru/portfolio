import React from 'react'
import { Route } from 'react-router-dom'
import { META_DB } from '../data/_data'
import * as PAGES from '../pages/_pages'

const MAIN = [
    {
        key: 'homepage',
        path: '/',
        element: <PAGES.Home meta={META_DB.homepage} />
    },
    {
        key: 'software',
        path: '/software',
        element: <PAGES.Software meta={META_DB.software} />
    },
    {
        key: 'contact',
        path: '/contact',
        element: <PAGES.Contact meta={META_DB.contact} />
    }
]

const INTEREST = [
    {
        key: 'reading',
        path: '/reading',
        element: <PAGES.Interest meta={META_DB.reading} type={'reading'} />
    },
    {
        key: 'developing',
        path: '/developing',
        element: (
            <PAGES.Interest meta={META_DB.developing} type={'developing'} />
        )
    },
    {
        key: 'recording',
        path: '/recording',
        element: <PAGES.Interest meta={META_DB.recording} type={'recording'} />
    }
]

const SOFTWARE = [
    {
        key: 'string_generator',
        path: '/software/string_generator',
        element: (
            <PAGES.Utility
                meta={META_DB.string_generator}
                utility={'string_generator'}
            />
        )
    },
    {
        key: 'material_weight',
        path: '/software/material_weight',
        element: (
            <PAGES.Utility
                meta={META_DB.material_weight}
                utility={'material_weight'}
            />
        )
    },
    {
        key: 'gradient_archive',
        path: '/software/gradient_archive',
        element: (
            <PAGES.Utility
                meta={META_DB.gradient_archive}
                utility={'gradient_archive'}
            />
        )
    }
]

const OTHER = [
    {
        key: 'stop',
        path: '*',
        element: <PAGES.Stop meta={META_DB.stop} />
    }
]

const mapRoutes = route => {
    return <Route key={route.key} path={route.path} element={route.element} />
}

const ROUTES = { MAIN, INTEREST, SOFTWARE, OTHER }

export { mapRoutes, ROUTES }
