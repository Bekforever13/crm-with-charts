import { useSelectors } from 'src/hooks/useSelectors'
import styles from './Filter.module.scss'
import { UiInput } from 'src/components/ui/input/UiInput'
import { UiSelect } from 'src/components/ui/select/UiSelect'
import { UiButton } from 'src/components/ui/button/UiButton'
import { useActions } from 'src/hooks/useActions'

const Filter: React.FC = () => {
	const { setFilterOpen } = useActions()
	const { filterOpen } = useSelectors()
	return (
		<div className={!filterOpen ? styles.hide : styles.filter}>
			<h2>Active students</h2>
			<div>
				Your name
				<UiInput size='large' />
			</div>
			<div>
				Your name
				<UiSelect size='large' />
			</div>
			<div className={styles.selects}>
				<div>
					Your name
					<UiSelect size='large' />
				</div>
				<div>
					Your name
					<UiSelect size='large' />
				</div>
			</div>
			<div className={styles.buttons}>
				<UiButton size='large' className={styles.cleaning}>
					Filter Cleaning
				</UiButton>
				<UiButton
					onClick={() => setFilterOpen(false)}
					size='large'
					className={styles.filtering}
				>
					Filtering
				</UiButton>
			</div>
		</div>
	)
}
export { Filter }
