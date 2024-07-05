import React from 'react'
import styles from './styles/styles.module.scss'
import { DATA_DB } from '../data/_data'
import { useModal } from '../hooks/_hooks'
import { addTimeoutedLoader } from '../helpers/_helpers'
import {
    Meta,
    Loader,
    Title,
    Text,
    Separator,
    Coin
} from '../components/_components'

export const Home = ({ meta }) => {
    const [moduleStatus, setModuleStatus] = React.useState('loading')

    const options = {
        author: DATA_DB.main.home.author,
        biography: DATA_DB.main.home.biography,
        feature: DATA_DB.main.home.feature,
        mapSpecification: (element, index) => (
            <Coin
                key={`coin_${index}`}
                title={element.title}
                plus={element.plus}
                minus={element.minus}
            />
        )
    }

    React.useEffect(() => {
        addTimeoutedLoader(500, setModuleStatus, 'ready')
    }, [])

    switch (moduleStatus) {
        case 'loading':
            return (
                <>
                    <Meta data={meta} />
                    <Loader />
                </>
            )
        case 'ready':
            return (
                <>
                    <Meta data={meta} />
                    <div className={styles.author}>
                        <h1>{options.author.name}</h1>
                        <SUBCOMP.Avatar
                            image={options.author.image}
                            age={options.author.age}
                            city={options.author.city}
                        />
                        <Separator />
                        <Text
                            prefix={'welcome'}
                            content={options.author.welcome}
                        />
                    </div>

                    <div className={styles.biography}>
                        <Title type={'h2'} title={options.biography.title} />
                        <Text
                            prefix={'biography'}
                            content={options.biography.description}
                        />
                    </div>
                    <div className={styles.feature}>
                        <Title type={'h2'} title={options.feature.title} />
                        <Text
                            prefix={'feature'}
                            content={options.feature.description}
                        />
                        <Separator />
                        {options.feature.list.map(options.mapSpecification)}
                    </div>
                </>
            )
        default:
            break
    }
}

const SUBCOMP = {
    Avatar: data => {
        const [button, setButton] = React.useState('default')
        const MODAL_RDX = useModal()
        const modal = JSON.stringify({
            type: 'image',
            image: {
                ...data.image,
                src: `home/${data.image.src}`
            }
        })
        const handleClick = () => {
            setButton('clicked')
            setTimeout(() => setButton('default'), 150)
            setTimeout(() => MODAL_RDX.open(modal), 600)
            // 150 (animation), 150 (animation), 300 (pause)
        }
        return (
            <button className={styles[button]}>
                <img
                    src={`home/${data.image.src}`}
                    alt={data.image.alt}
                    onClick={handleClick}
                />
                <strong>{data.age}</strong>
                <strong>{data.city}</strong>
            </button>
        )
    }
}
