import { configureStore } from '@reduxjs/toolkit'
import SessionReducer from './reducers/reducer'

export const store = configureStore({
    reducer: {
        session: SessionReducer
    },
});