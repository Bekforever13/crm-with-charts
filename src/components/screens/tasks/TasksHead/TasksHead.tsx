import { UiButton } from 'src/components/ui/button/UiButton'
import styles from './TasksHead.module.scss'
import icon from 'src/assets/img/button.svg'
import { useActions } from 'src/hooks/useActions'
import { useSelectors } from 'src/hooks/useSelectors'

const TasksHead: React.FC = () => {
	const { setVazifalarOpen } = useActions()
	const { vazifalarOpen } = useSelectors()

	const handleClick = () => {
		setVazifalarOpen(!vazifalarOpen)
	}

	return (
		<div className={styles.head}>
			<h1>Mijoz sahifasi</h1>
			<UiButton onClick={handleClick} size='large' className={styles.button}>
				<img src={icon} />
				Vazifalar
			</UiButton>
		</div>
	)
}
export { TasksHead }
