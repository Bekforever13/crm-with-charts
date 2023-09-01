import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
	filterOpen: false,
	vazifalarOpen: false,
}

const sharedSlice = createSlice({
	name: 'shared',
	initialState,
	reducers: {
		setFilterOpen(state, { payload }: PayloadAction<boolean>) {
			state.filterOpen = payload
		},
		setVazifalarOpen(state, { payload }: PayloadAction<boolean>) {
			state.vazifalarOpen = payload
		},
	},
})

export const { reducer, actions } = sharedSlice
