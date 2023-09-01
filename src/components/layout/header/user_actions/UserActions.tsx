import { UiInput } from 'src/components/ui/input/UiInput'
import { BsSearch } from 'react-icons/bs'
import { IoMdNotificationsOutline } from 'react-icons/io'
import avatar from 'src/assets/img/avatar.png'
import styles from './UserActions.module.scss'

const UserActions: React.FC = () => {
	return (
		<div className={styles.actions}>
			<UiInput size='large' placeholder='Search...' prefix={<BsSearch />} />
			<div className={styles.notification}>
				<IoMdNotificationsOutline />
			</div>
			<div className={styles.user}>
				<span>Kruluz Ustman</span>
				<img src={avatar} />
			</div>
		</div>
	)
}
export { UserActions }
