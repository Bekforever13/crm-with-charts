import styles from './Navbar.module.scss'
import logo from 'src/assets/img/logo2.png'
import { Menu } from './menu/Menu'

const Navbar: React.FC = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.logo}>
				<img src={logo} />
				<span>Dashboard</span>
			</div>
			<Menu />
		</div>
	)
}

export { Navbar }
