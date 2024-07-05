import React from 'react'
import styles from './styles.module.scss'
import { GRADIENTS_DB } from './data'
import {
    createGradientString,
    createGradientCode,
    createGradientStyle,
    createColorStyle,
    animateElement
} from './helpers'

const handleGradient = e => {
    const element = e.currentTarget
    const value = element.dataset.value
    const result = createGradientCode(value)
    navigator.clipboard.writeText(result)
    animateElement(element, styles.clicked, 300)
}

const handleColor = e => {
    const element = e.currentTarget
    const value = element.dataset.value
    navigator.clipboard.writeText(value)
    animateElement(element, styles.clicked, 150)
}

export const GradientArchive = () => {
    return (
        <>
            {GRADIENTS_DB.map(gradient => {
                return (
                    <div key={gradient.uid} className={styles.gradient}>
                        <Preview data={gradient.data} action={handleGradient} />
                        <div className={styles.divided}>
                            {gradient.data.map(element => (
                                <Color
                                    key={element}
                                    data={element}
                                    action={handleColor}
                                />
                            ))}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

const Preview = ({ data, action }) => {
    const string = createGradientString(data)
    const style = createGradientStyle(data)
    return (
        <button
            className={styles.preview}
            data-value={string}
            onClick={action}
            style={style}
        />
    )
}

const Color = ({ data, action }) => {
    const style = createColorStyle(data)
    const sliced = data.slice(1)
    return (
        <button key={sliced} data-value={data} onClick={action}>
            <span style={style} />
            <span>{sliced}</span>
        </button>
    )
}
