import { TotalStatistics } from 'src/components/shared/total_statistics/TotalStatistics'
import { KPIstatistic } from './KPIstatistic/KPIstatistic'
import { KPItable } from './KPItable/KPItable'
import styles from './UserKPI.module.scss'
import { ArrowUpOutlined } from '@ant-design/icons'
import { ChartBar } from 'src/components/shared/chartBar/ChartBar'
import { DoughnutChart } from './DoughnutChart/DoughnutChart'
import { EmployeesTable } from '../employees/EmployeesTable/EmployeesTable'

const UserKPI: React.FC = () => (
	<div className={styles.user_kpi}>
		<div className={styles.statistics}>
			<KPIstatistic desc='Ходимлар сони штат бўйича' number={8} />
			<KPIstatistic desc='Вакант' number={0} />
			<KPIstatistic desc='Рўйхат бўйича' number={8} />
			<KPIstatistic desc='Меҳнат таътилида' number={1} />
			<KPIstatistic desc='Сабабли' number={0} />
			<KPIstatistic desc='Сабабсиз' number={0} />
		</div>
		<div className={styles.second}>
			<KPItable />
			<div style={{ width: '300px' }}>
				<TotalStatistics
					title='KPI кўрсаткичи'
					value='73 балл'
					valueStyle={{ color: '#3f8600' }}
					prefix={<ArrowUpOutlined />}
					desc={'20% ўтган ойга нисбатан'}
				/>
			</div>
		</div>
		<div className={styles.charts}>
			<ChartBar />
			<DoughnutChart />
		</div>
		<EmployeesTable />
	</div>
)
export { UserKPI }
