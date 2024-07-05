import React from 'react'
import styles from './styles/styles.module.scss'
import { useNavigate } from 'react-router-dom'
import { useModal, useSidebar } from '../hooks/_hooks'

const Button = data => {
    // type = 'round/vertical/tile/image'
    // optional: back = 'github/global/download/more'
    // optional: title = string
    // optional: desc = string
    // optional: image = string (['full link', 'alt'])
    // action = ['ext/int/act', 'link/func/null']
    const navigate = useNavigate()
    const MODAL_RDX = useModal()
    const [container, setContainer] = React.useState('default')
    const options = {
        style: `${styles[`button_${data.type}`]} ${styles[container]}`,
        action: JSON.stringify([data.action[0], data.action[1]]),
        disabled: data.action[1] === null,
        handleClick: e => {
            const action = JSON.parse(e.currentTarget.dataset.action)
            setContainer('clicked')
            setTimeout(() => {
                setContainer('default')
                setTimeout(() => {
                    switch (action[0]) {
                        case 'ext':
                            window.open(action[1], '_blanc')
                            break
                        case 'int':
                            navigate(action[1])
                            break
                        case 'copy':
                            navigator.clipboard.writeText(action[1])
                            break
                        case 'modal':
                            MODAL_RDX.open(
                                JSON.stringify({
                                    type: 'image',
                                    image: data.image
                                })
                            )
                            break
                        default:
                            break
                    }
                }, 450) // 150 (animation) + 300 (pause)
            }, 150) // 150 (animation)
        }
    }

    switch (data.type) {
        case 'square':
            options.back = data.back
            return (
                <button
                    className={options.style}
                    data-action={options.action}
                    data-back={options.back}
                    onClick={options.handleClick}
                    disabled={options.disabled}
                />
            )
        case 'vertical':
            options.title = data.title
            return (
                <button
                    className={options.style}
                    data-action={options.action}
                    onClick={options.handleClick}
                    disabled={options.disabled}>
                    {options.title}
                </button>
            )
        case 'tile':
            options.title = data.title
            options.desc = data.desc
            return (
                <button
                    className={options.style}
                    data-action={options.action}
                    onClick={options.handleClick}
                    disabled={options.disabled}>
                    <strong>{options.title}</strong>
                    <p>{options.desc}</p>
                </button>
            )
        case 'image':
            options.image = data.image
            return (
                <button
                    className={options.style}
                    data-action={options.action}
                    onClick={options.handleClick}
                    disabled={options.disabled}>
                    <img src={options.image.src} alt={options.image.alt} />
                </button>
            )
        default:
            break
    }
}

const Hamburger = () => {
    const SIDEBAR_RDX = useSidebar()
    const options = {
        container: SIDEBAR_RDX.status === true ? ` ${styles.active}` : '',
        handleClick: () => SIDEBAR_RDX.toggle()
    }
    return (
        <button
            className={`${styles.hamburger}${options.container}`}
            onClick={options.handleClick}>
            <span />
            <span />
            <span />
        </button>
    )
}

export { Button, Hamburger }
