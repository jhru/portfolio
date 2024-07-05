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
            ratio: 0
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
            const ratio = width / height
            state.browser.width = width
            state.browser.height = height
            state.browser.ratio = parseFloat(ratio.toFixed(2))
        }
    }
})

export const { toggleSidebar, openModal, closeModal, clearModal, setBrowser } =
    settingsSlice.actions
export const settingsReducer = settingsSlice.reducer
