import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        sidebar: false,
        modal: {
            status: 'closed',
            data: null
        },
        browser: {
            width: 0,
            height: 0,
            ratio: 0,
            flag: {
                invalid: false
            }
        }
    },
    reducers: {
        toggleSidebar: state => {
            state.sidebar = state.sidebar === true ? false : true
        },
        openModal: (state, action) => {
            state.modal.status = 'opened'
            state.modal.data = action.payload
        },
        closeModal: state => {
            state.modal.status = 'closed'
        },
        clearModal: state => {
            state.modal.data = null
        },
        setBrowser: (state, action) => {
            const { width, height } = action.payload
            state.browser.width = width
            state.browser.height = height
            state.browser.ratio = setBrowserRatio(width, height)
            state.browser.invalid = setBrowserInvalid(width, height)
        }
    }
})

const setBrowserInvalid = (width, height) => {
    const invalid = width < 320 || height < 500
    return invalid
}

const setBrowserRatio = (width, height) => {
    const ratio = width / height
    const format = parseFloat(ratio.toFixed(2))
    return format
}

export const { toggleSidebar, openModal, closeModal, clearModal, setBrowser } =
    settingsSlice.actions
export const settingsReducer = settingsSlice.reducer
