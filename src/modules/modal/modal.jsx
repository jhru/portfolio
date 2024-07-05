import React from 'react'
import styles from './styles.module.scss'
import { useModal, useBrowser } from '../../hooks/_hooks'
import { calculateImageSize } from '../../helpers/_helpers'

export const Modal = () => {
    const MODAL_RDX = useModal()
    const options = {
        container: `${styles.modal} ${styles[MODAL_RDX.status]}`,
        status: MODAL_RDX.status,
        data: JSON.parse(MODAL_RDX.data),
        close: () => {
            MODAL_RDX.close()
            setTimeout(() => MODAL_RDX.clear(), 300)
        }
    }

    return (
        <div className={options.container} onClick={options.close}>
            {options.data !== null && (
                <Image image={options.data.image} close={options.close} />
            )}
        </div>
    )
}

const Image = ({ image, close }) => {
    const [container, setContainer] = React.useState({})
    const BROWSER_RDX = useBrowser()
    const browser = BROWSER_RDX.status
    const space = 5

    React.useEffect(() => {
        const style = calculateImageSize(image, browser, space)
        setContainer(style)
    }, [BROWSER_RDX.status])

    return (
        <div className={styles.content} style={container} onClick={close}>
            <img src={image.src} alt={image.alt} onClick={close} />
        </div>
    )
}
