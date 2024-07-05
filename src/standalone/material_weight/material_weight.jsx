import React from 'react'
import styles from './styles.module.scss'
import { MATERIALS_DB } from './data'
import { calculateResult, animateElement } from './helpers'

export const MaterialWeight = () => {
    const [data, setData] = React.useState({
        len: 6000,
        wid: 145,
        hei: 45,
        den: MATERIALS_DB.pine.density,
        result: 0
    })

    const handleInput = e => {
        const element = e.currentTarget
        const type = element.dataset.type
        const cleared = element.value.replace(/[^\d.]/g, '')
        const response = cleared === '' ? 0 : parseFloat(cleared)
        setData(prev => ({ ...prev, [type]: response }))
    }

    const handleMaterial = e => {
        const element = e.currentTarget
        const value = element.dataset.value
        setData(prev => ({ ...prev, den: value }))
        animateElement(element, styles.clicked)
    }

    React.useEffect(() => {
        calculateResult({ data, state: setData })
    }, [data.len, data.wid, data.hei, data.den])

    return (
        <div className={styles.material_weight}>
            <Input
                title={'длина'}
                type={'len'}
                data={data.len}
                action={handleInput}
            />
            <Input
                title={'ширина'}
                type={'wid'}
                data={data.wid}
                action={handleInput}
            />
            <Input
                title={'высота'}
                type={'hei'}
                data={data.hei}
                action={handleInput}
            />
            <Input
                title={'плотность'}
                type={'den'}
                data={data.den}
                action={handleInput}
            />
            <Density action={handleMaterial} />
            <Result result={data.result} />
        </div>
    )
}

const Input = ({ title, type, data, action }) => {
    return (
        <div className={styles.input}>
            <label>{title}</label>
            <input
                type="text"
                data-type={type}
                value={data}
                onChange={action}
            />
        </div>
    )
}

const Density = ({ action }) => {
    const mapDensity = ([uid, element]) => (
        <button
            key={`density-${uid}`}
            data-value={element.density}
            onClick={action}>
            {element.name}
        </button>
    )
    return (
        <div className={styles.material}>
            {Object.entries(MATERIALS_DB).map(mapDensity)}
        </div>
    )
}

const Result = ({ result }) => {
    return <strong className={styles.result}>{result}</strong>
}
