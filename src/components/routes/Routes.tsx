import { Home } from 'src/components/screens'
import { Employees } from 'src/components/screens'
import { Tasks } from 'src/components/screens'
import { UserInfo } from 'src/components/screens'
import { UserKPI } from 'src/components/screens'
import { Sozlamalar } from 'src/components/screens'

export const routes = [
	{ path: '/', element: <Home /> },
	{ path: '/employees', element: <Employees /> },
	{ path: '/tasks', element: <Tasks /> },
	{ path: '/user_info', element: <UserInfo /> },
	{ path: '/user_kpi', element: <UserKPI /> },
	{ path: '/sozlamalar', element: <Sozlamalar /> },
]
