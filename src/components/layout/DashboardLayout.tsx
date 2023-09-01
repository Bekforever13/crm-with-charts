import React from 'react'
import { Layout } from 'antd'
import styles from './DashboardLayout.module.scss'
import { Outlet } from 'react-router-dom'
import { DashboardHeader } from './header/DashboardHeader'
import { Navbar } from './navbar/Navbar'

const DashboardLayout: React.FC = () => (
	<Layout className={styles.layout}>
		<Navbar />
		<Layout className={styles.wrapper}>
			<DashboardHeader />
			<Outlet />
		</Layout>
	</Layout>
)

export { DashboardLayout }
