const addTimeoutedLoader = (time, action, status) => {
    const timeout = setTimeout(() => action(status), time)
    return () => {
        clearTimeout(timeout)
    }
}

const createImageWork = type => {
    return { src: `/images/navigation/${type}.webp`, alt: type }
}

const createImageBook = (work, extension) => {
    return {
        backgroundImage: `url('/book/${work}.${extension}')`
    }
}

const createBackgroundWork = work => {
    return {
        backgroundImage: `url('/images/navigation/${work}.webp')`
    }
}

const checkLinkForMail = (type, link) => {
    return type === 'email' ? 'mailto:' + link : link
}

const calculateImageSize = (image, browser, space) => {
    let width, height

    if (image.ratio >= browser.ratio) {
        if (image.width >= browser.width * 0.8) {
            width = browser.width * 0.8
            height = width / image.ratio
        } else {
            width = image.width
            height = image.width / image.ratio
        }
    }

    if (image.ratio < browser.ratio) {
        if (image.height >= browser.height * 0.8) {
            height = browser.height * 0.8
            width = height * image.ratio
        } else {
            height = image.height
            width = height * image.ratio
        }
    }

    return {
        width: `${width + space * 2}px`,
        height: `${height + space * 2}px`
    }
}

export {
    addTimeoutedLoader,
    createImageWork,
    createImageBook,
    createBackgroundWork,
    checkLinkForMail,
    calculateImageSize
}
