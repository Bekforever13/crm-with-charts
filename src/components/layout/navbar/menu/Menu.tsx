import { Link, useLocation } from 'react-router-dom'
import styles from './Menu.module.scss'
import employeesIcon from 'src/assets/img/profile-2user.svg'
import tasksIcon from 'src/assets/img/document-text.svg'
import userInfoIcon from 'src/assets/img/profile.svg'
import userKPIIcon from 'src/assets/img/presention-chart.svg'
import sozlamalarIcon from 'src/assets/img/setting-2.svg'
import logoutIcon from 'src/assets/img/logout.svg'
import {RiHomeLine} from 'react-icons/ri'

const Menu: React.FC = () => {
	const { pathname } = useLocation()
	const menuItems = [
		{ pathname: '/', icon: <RiHomeLine />, label: 'Document' },
		{
			pathname: '/employees',
			icon: <img src={employeesIcon} />,
			label: 'Employees',
		},
		{
			pathname: '/tasks',
			icon: <img src={tasksIcon} />,
			label: 'Tasks',
		},
		{
			pathname: '/user_info',
			icon: <img src={userInfoIcon} />,
			label: 'User info',
		},
		{
			pathname: '/user_kpi',
			icon: <img src={userKPIIcon} />,
			label: 'User KPI',
		},
	]

	const preferenceItems = [
		{
			pathname: '/sozlamalar',
			icon: <img src={sozlamalarIcon} />,
			label: 'Sozlamalar',
		},
		{
			pathname: '/auth/login',
			icon: <img src={logoutIcon} />,
			label: 'Chiqish',
		},
	]

	return (
		<div className={styles.menu}>
			<div className={styles.main_menu}>
				<h5>Main menu</h5>
				{menuItems.map(item => {
					return (
						<div
							key={item.pathname}
							className={pathname === item.pathname ? styles.active : ''}
						>
							{item.icon}
							<Link to={item.pathname}>{item.label}</Link>
						</div>
					)
				})}
			</div>
			<div className={styles.preferences}>
				<h5>Preferences</h5>
				{preferenceItems.map(item => {
					return (
						<div
							key={item.pathname}
							className={
								pathname === item.pathname ? styles.active : styles.notActive
							}
						>
							{item.icon}
							<Link to={item.pathname}>{item.label}</Link>
						</div>
					)
				})}
			</div>
		</div>
	)
}
export { Menu }
