import { Breadcrumbs } from './Breadcrumbs/Breadcrumbs'
import styles from './DashboardHeader.module.scss'
import { UserActions } from './user_actions/UserActions'

const DashboardHeader: React.FC = () => {
	return (
		<div className={styles.header}>
			<Breadcrumbs />
			<UserActions />
		</div>
	)
}
export { DashboardHeader }
