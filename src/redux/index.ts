import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { reducer as auth } from './Auth/Auth.slice'
import { reducer as shared } from './shared/shared.slice'

const reducers = combineReducers({
	auth,
	shared,
})

export const store = configureStore({
	reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)
