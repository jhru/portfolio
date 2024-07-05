import React from 'react'
import { Routes } from 'react-router-dom'
import { useBrowser } from './hooks/_hooks'
import { mapRoutes, ROUTES } from './routes/_routes'
import * as MODULES from './modules/_modules'
import './styles/global.scss'

export const App = () => {
    const BROWSER_RDX = useBrowser()
    React.useEffect(() => {
        const handleResize = () => {
            BROWSER_RDX.set({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="app">
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
