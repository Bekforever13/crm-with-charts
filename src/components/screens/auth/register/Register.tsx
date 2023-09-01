import { UiButton } from 'src/components/ui/button/UiButton'
import styles from './Register.module.scss'
import { UiInput } from 'src/components/ui/input/UiInput'
import { useState } from 'react'
import { useActions } from 'src/hooks/useActions'
import { Link, useNavigate } from 'react-router-dom'

const Register: React.FC = () => {
	const [login, setLogin] = useState<string>()
	const [password, setPassword] = useState<string>()
	const { setAuth } = useActions()
	const navigate = useNavigate()

	const handleClick = () => {
		setAuth(true)
		localStorage.setItem('isAuth', 'true')
		navigate('/', { replace: true })
	}

	return (
		<div className={styles.login}>
			<h2>Tizimga kirish</h2>
			<label className={styles.input_wrapper}>
				<span>IVV</span>
				<UiInput size='large' placeholder='Login...' />
			</label>
			<label className={styles.input_wrapper}>
				<span>VIIB Boshqarmasi</span>
				<UiInput size='large' placeholder='Password...' />
			</label>
			<label className={styles.input_wrapper}>
				<span>Tuman IIBo’lim</span>
				<UiInput size='large' placeholder='Password...' />
			</label>
			<label className={styles.input_wrapper}>
				<span>Login</span>
				<UiInput
					value={login}
					onChange={e => setLogin(e.target.value)}
					size='large'
					placeholder='Password...'
				/>
			</label>
			<label className={styles.input_wrapper}>
				<span>Password</span>
				<UiInput
					value={password}
					onChange={e => setPassword(e.target.value)}
					size='large'
					placeholder='Password...'
				/>
			</label>
			<UiButton onClick={handleClick} size='large' type='primary'>
				Kirish
			</UiButton>
			<div>
				Already have account? <Link to='/auth/login'>Click here</Link>
			</div>
		</div>
	)
}
export { Register }
