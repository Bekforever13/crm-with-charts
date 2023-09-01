import { AiOutlineFilter, AiOutlinePlus } from 'react-icons/ai'
import { UiInput } from 'src/components/ui/input/UiInput'
import { UiButton } from 'src/components/ui/button/UiButton'
import styles from './TableHead.module.scss'
import { BsSearch } from 'react-icons/bs'
import { useActions } from 'src/hooks/useActions'

const TableHead: React.FC = () => {
	const { setFilterOpen } = useActions()
	return (
		<div className={styles.head}>
			<div className={styles.title}>
				<h2>Active Students</h2>
				<span className={styles.stick}></span>
				<div>274 Users</div>
				<UiInput
					size='large'
					placeholder='Search...'
					prefix={<BsSearch />}
					style={{ borderRadius: '32px' }}
				/>
			</div>
			<div className={styles.buttons}>
				<UiButton className={styles.filter} size='large'>
					<AiOutlineFilter />
					Filtering
				</UiButton>
				<UiButton
					onClick={() => setFilterOpen(true)}
					className={styles.button}
					size='large'
				>
					<AiOutlinePlus />
					Button
				</UiButton>
			</div>
		</div>
	)
}
export default TableHead
