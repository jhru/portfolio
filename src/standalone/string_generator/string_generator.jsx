import React from 'react'
import styles from './styles.module.scss'
import { createString, animateElement } from './helpers'

export const StringGenerator = () => {
    const [data, setData] = React.useState({
        amount: 18,
        upper: true,
        lower: true,
        number: true,
        symbol: false,
        result: ''
    })

    const handleResult = e => {
        const element = e.currentTarget
        const type = element.dataset.type

        if (type === 'refresh') createString({ data, state: setData })
        if (type === 'copy') navigator.clipboard.writeText(data.result)

        animateElement(element, styles.clicked)
    }

    const handleAmount = e => {
        const element = e.currentTarget
        const type = element.dataset.type
        let value = 1,
            verify,
            sending

        if (e.shiftKey && !e.ctrlKey) value *= 5
        if (e.ctrlKey && !e.shiftKey) value *= 10
        if (e.ctrlKey && e.shiftKey) value *= 20

        if (type === 'increment') {
            verify = data.amount + value
            verify > 300 ? (sending = 300) : (sending = verify)
        }

        if (type === 'decrement') {
            verify = data.amount - value
            verify < 1 ? (sending = 0) : (sending = verify)
        }

        setData(prev => ({
            ...prev,
            amount: sending
        }))

        animateElement(element, styles.clicked)
    }

    const handleAlphabet = e => {
        const element = e.currentTarget
        const value = element.dataset.value

        setData(prev => ({
            ...prev,
            [value]: !prev[value]
        }))
    }

    React.useEffect(() => {
        createString({ data, state: setData })
    }, [])

    return (
        <div className={styles.string_generator}>
            <Result data={data} action={handleResult} />
            <Amount data={data} action={handleAmount} />
            <Alphabet data={data} action={handleAlphabet} />
        </div>
    )
}

const Result = ({ data, action }) => {
    return (
        <div className={styles.result}>
            <strong>{data.result}</strong>
            <button
                data-type={'refresh'}
                className={styles.refresh}
                onClick={action}
            />
            <button
                data-type={'copy'}
                className={styles.copy}
                onClick={action}
            />
        </div>
    )
}

const Amount = ({ data, action }) => {
    return (
        <div className={styles.amount}>
            <button
                data-type={'increment'}
                className={styles.increment}
                onClick={action}>
                +
            </button>
            <strong>{data.amount}</strong>
            <button
                data-type={'decrement'}
                className={styles.decrement}
                onClick={action}>
                -
            </button>
        </div>
    )
}

const Alphabet = ({ data, action }) => {
    return (
        <div className={styles.alphabet}>
            <button
                data-value={'upper'}
                className={data.upper ? styles.active : undefined}
                onClick={action}>
                заглавные
            </button>
            <button
                data-value={'lower'}
                className={data.lower ? styles.active : undefined}
                onClick={action}>
                прописные
            </button>
            <button
                data-value={'number'}
                className={data.number ? styles.active : undefined}
                onClick={action}>
                цифры
            </button>
            <button
                data-value={'symbol'}
                className={data.symbol ? styles.active : undefined}
                onClick={action}>
                символы
            </button>
        </div>
    )
}
