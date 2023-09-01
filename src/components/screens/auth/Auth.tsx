import { Outlet } from 'react-router-dom'
import styles from './Auth.module.scss'
import logo from 'src/assets/img/logo.png'

const Auth: React.FC = () => {
	return (
		<div className={styles.auth}>
			<div className={styles.logo_text_wrapper}>
				<img src={logo} alt='logo' />
				<p>
					Lorem ipsum dolor sit amet consectetur. Pretium aliquet ac molestie
					lacus. Faucibus arcu aliquam nullam nunc dictumst.
				</p>
			</div>
			<Outlet />
		</div>
	)
}
export { Auth }
