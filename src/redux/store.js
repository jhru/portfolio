import { configureStore } from '@reduxjs/toolkit'
import { settingsReducer } from './slices/settings.js'

export const store = configureStore({
    reducer: {
        settings: settingsReducer
    }
})
