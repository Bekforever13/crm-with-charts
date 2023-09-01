import { TotalStatistics } from 'src/components/shared/total_statistics/TotalStatistics'
import styles from './UserInfo.module.scss'
import { ArrowUpOutlined } from '@ant-design/icons'
import { KPIChart } from './KPIchart/KPIChart'
import { Info } from './info/Info'
import { ChartBar } from '../../shared/chartBar/ChartBar'
import { ChartByMonth } from './chartByMonth/ChartByMonth'

const UserInfo: React.FC = () => {
	return (
		<div className={styles.user_info}>
			<div className={styles.left}>
				<Info />
				<ChartBar />
				<ChartByMonth />
			</div>
			<div className={styles.right}>
				<TotalStatistics
					title='KPI кўрсаткичи'
					value='73 балл'
					valueStyle={{ color: '#3f8600' }}
					prefix={<ArrowUpOutlined />}
					desc={'20% ўтган ойга нисбатан'}
				/>
				<KPIChart />
			</div>
		</div>
	)
}
export { UserInfo }
