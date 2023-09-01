import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import styles from './DoughnutChart.module.scss'
import { BiDotsHorizontal } from 'react-icons/bi'

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart: React.FC = () => {
	const dataName = ['"қизил" маҳаллалар сони', '"яшил" маҳаллалар сони']
	const options = {
		responsive: true,
		maintainAspectRatio: true,
		plugins: {
			legend: {
				position: 'top' as const,
				display: false,
			},
		},
	}
	const data = {
		labels: ['"қизил" маҳаллалар сони', '"яшил" маҳаллалар сони'],
		datasets: [
			{
				label: 'soni',
				data: [131, 78],
				backgroundColor: ['#FF4D4F', '#16EF39'],
				borderColor: ['#FF4D4F', '#16EF39'],
				borderWidth: 1,
			},
		],
	}

	return (
		<div className={styles.doughnut}>
			<div className={styles.head}>
				<h2>
					Отряд хизмат олиб борадиган ҳудудда (туман, шаҳар, сектор)даги
					маҳаллалар сони
				</h2>
				<span>
					<BiDotsHorizontal />
				</span>
			</div>
			<Doughnut data={data} options={options} />
			<ul>
				{data.datasets[0].data.map((price, i) => {
					return (
						<li key={i}>
							{dataName[i]}
							<span>{price}</span>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
export { DoughnutChart }
