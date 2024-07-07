import React, { useEffect } from 'react'
import { debounce } from 'lodash'

const useWindowSize = action => {
    useEffect(() => {
        const handleResizeDebounced = debounce(() => {
            const sending = {
                width: window.innerWidth,
                height: window.innerHeight
            }
            action(sending)
        }, 10)
        window.addEventListener('resize', handleResizeDebounced)
        handleResizeDebounced()
        return () => {
            window.removeEventListener('resize', handleResizeDebounced)
            handleResizeDebounced.cancel()
        }
    }, [])

    return null
}

export { useWindowSize }
