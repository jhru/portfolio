import React from 'react'
import { Routes } from 'react-router-dom'
import { useWindowSize, useBrowser } from './hooks/_hooks'
import { mapRoutes, ROUTES } from './routes/_routes'
import * as MODULES from './modules/_modules'
import { Placeholder } from './components/placeholder'
import './styles/global.scss'

export const App = () => {
    const BROWSER_RDX = useBrowser()
    useWindowSize(BROWSER_RDX.set)

    return (
        <div className="app">
            {BROWSER_RDX.status.invalid && <Placeholder />}
            <MODULES.Header />
            <MODULES.Sidebar />
            <MODULES.Modal />
            <div id="wrap">
                <main>
                    <Routes>
                        {ROUTES.MAIN.map(mapRoutes)}
                        {ROUTES.INTEREST.map(mapRoutes)}
                        {ROUTES.SOFTWARE.map(mapRoutes)}
                        {ROUTES.OTHER.map(mapRoutes)}
                    </Routes>
                </main>
            </div>
            <MODULES.Footer />
        </div>
    )
}
