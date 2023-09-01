import { Route, Routes } from 'react-router-dom'
import { DashboardLayout } from './components/layout/DashboardLayout'
import { routes } from './components/routes/Routes'
import { Auth } from './components/screens/auth/Auth'
import { Login } from './components/screens/auth/login/Login'
import { Register } from './components/screens/auth/register/Register'
import s from './assets/styles/App.module.scss'

const App = () => {
	return (
		<div className={s.app}>
			<Routes>
				<Route path='/auth' element={<Auth />}>
					<Route path='/auth/login' element={<Login />} />
					<Route path='/auth/register' element={<Register />} />
				</Route>
				<Route path='/' element={<DashboardLayout />}>
					{routes.map(item => {
						return (
							<Route key={item.path} path={item.path} element={item.element} />
						)
					})}
				</Route>
			</Routes>
		</div>
	)
}
export { App }
