import { useDispatch, useSelector } from 'react-redux'
import {
    toggleSidebar,
    openModal,
    closeModal,
    clearModal,
    setBrowser
} from '../redux/slices/settings'

const useSidebar = () => {
    const dispatch = useDispatch()
    const status = useSelector(state => state.settings.sidebar)
    const toggle = () => dispatch(toggleSidebar())
    return {
        status,
        toggle
    }
}

const useModal = () => {
    const dispatch = useDispatch()
    const status = useSelector(state => state.settings.modal.status)
    const data = useSelector(state => state.settings.modal.data)
    const open = data => dispatch(openModal(data))
    const close = () => dispatch(closeModal())
    const clear = () => dispatch(clearModal())
    return {
        status,
        data,
        open,
        close,
        clear
    }
}

const useBrowser = () => {
    const dispatch = useDispatch()
    const status = useSelector(state => state.settings.browser)
    const set = data => dispatch(setBrowser(data))
    return {
        status,
        set
    }
}

export { useSidebar, useModal, useBrowser }
