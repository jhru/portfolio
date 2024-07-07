import React from 'react'
import styles from './styles.module.scss'
import { Button, Title, Text, Separator } from '../../components/_components'
import { checkLinkForMail } from '../../helpers/_helpers'

const Project = ({ data }) => {
    // const { type, work, title, author, description, image, link } = data
    const options = {
        mapPreview: (element, index) => {
            return (
                <Button
                    key={`${data.type}_${index}`}
                    type={'image'}
                    action={['modal', `${data.type}/${element}`]}
                    image={{
                        ...element,
                        src: `${data.type}/${element.src}`
                    }}
                />
            )
        }
    }

    switch (data.type) {
        case 'developing':
            // const { title, description, image, link } = data
            return (
                <div className={styles.website}>
                    <Title type={'h2'} title={data.title} />
                    <Text prefix={'description'} content={data.description} />
                    <Separator />
                    <div className={styles.preview_website}>
                        {data.image.map(options.mapPreview)}
                    </div>
                    <Button
                        type={'square'}
                        back={'github'}
                        action={['ext', data.link.github]}
                    />
                    <Button
                        type={'square'}
                        back={'global'}
                        action={['ext', data.link.global]}
                    />
                </div>
            )
        case 'reading':
            // const { title, description, image, link } = data
            return (
                <div className={styles.book}>
                    <Title type={'h2'} title={data.title} />
                    <Text prefix={'description'} content={data.description} />
                    <Separator />
                    <div className={styles.preview_book}>
                        {data.image.map(options.mapPreview)}
                    </div>
                    <Button
                        type={'square'}
                        back={'load'}
                        action={['ext', data.link.load]}
                    />
                    <Button
                        type={'square'}
                        back={'more'}
                        action={['int', data.link.more]}
                    />
                </div>
            )
        case 'contact': {
            // const { work, title, description, link } = data
            const background = {
                backgroundImage: `url(contact/${data.image.src})`
            }
            return (
                <div className={styles.contact}>
                    <div className={styles.main} style={background}>
                        <Title type={'h2_contact'} title={data.title} />
                        <Button
                            type={'square'}
                            back={'copy'}
                            action={['copy', data.link]}
                        />
                        <Button
                            type={'square'}
                            back={'global'}
                            action={[
                                'ext',
                                checkLinkForMail(data.work, data.link)
                            ]}
                        />
                    </div>
                    <Text prefix={'description'} content={data.description} />
                </div>
            )
        }
        default:
            break
    }
}

export { Project }
