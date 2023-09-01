import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from 'src/redux'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useSelectors = () => {
	const { auth } = useAppSelector(s => s)
	const { shared } = useAppSelector(s => s)
	return { ...auth, ...shared }
}
