import { UiButton } from 'src/components/ui/button/UiButton'
import styles from './Login.module.scss'
import { UiInput } from 'src/components/ui/input/UiInput'
import { useState } from 'react'
import { useActions } from 'src/hooks/useActions'
import { Link, useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
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
				<span>Login</span>
				<UiInput
					value={login}
					onChange={e => setLogin(e.target.value)}
					size='large'
					placeholder='Login...'
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
				Don't have account? <Link to='/auth/register'>Click here</Link>
			</div>
		</div>
	)
}
export { Login }
