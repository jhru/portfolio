import React from 'react'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
import { DATA_DB } from '../../data/_data'
import { useSidebar } from '../../hooks/_hooks'
import { createBackgroundWork } from '../../helpers/_helpers'

export const Sidebar = () => {
    const SIDEBAR_RDX = useSidebar()
    const [container, setContainer] = React.useState('closed')

    const options = {
        status: SIDEBAR_RDX.status,
        overlay: `${styles.overlay} ${styles[container]}`,
        sidebar: `${styles.sidebar} ${styles[container]}`,
        navigation: DATA_DB.sidebar.navigation,
        mapNavigation: element => (
            <SUBCOMPONENTS.Button key={element.work} element={element} />
        ),
        click: () => SIDEBAR_RDX.toggle()
    }

    React.useEffect(() => {
        switch (options.status) {
            case true:
                setContainer('opened')
                break
            case false:
                setContainer('closed')
                break
            default:
                break
        }
    }, [options.status])

    return (
        <>
            <div className={options.overlay} onClick={SIDEBAR_RDX.toggle} />
            <div className={options.sidebar}>
                <div className={styles.navigation}>
                    {options.navigation.map(options.mapNavigation)}
                </div>
            </div>
        </>
    )
}

const SUBCOMPONENTS = {
    Button: ({ element }) => {
        const SIDEBAR_RDX = useSidebar()
        const navigate = useNavigate()
        const handleClick = e => {
            const value = e.currentTarget.dataset.value
            SIDEBAR_RDX.toggle()
            setTimeout(() => {
                value === 'homepage' ? navigate(`/`) : navigate(`/${value}`)
            }, 300)
        }

        switch (element.type) {
            case 'home':
                return (
                    <button
                        data-value={element.work}
                        className={styles.home}
                        onClick={handleClick}
                        disabled={element.disabled}
                    />
                )
            case 'main':
                return (
                    <button
                        data-value={element.work}
                        className={styles.main}
                        onClick={handleClick}
                        disabled={element.disabled}>
                        {element.title}
                    </button>
                )
            case 'interest':
                return (
                    <button
                        data-value={element.work}
                        className={styles.interest}
                        onClick={handleClick}
                        disabled={element.disabled}>
                        <div style={createBackgroundWork(element.work)} />
                        <span>{element.title}</span>
                    </button>
                )
            default:
                break
        }
    }
}
