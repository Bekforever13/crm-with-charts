import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import styles from './SpendByCategory.module.scss'
import { BiDotsHorizontal } from 'react-icons/bi'

ChartJS.register(ArcElement, Tooltip, Legend)

const SpendByCategory: React.FC = () => {
	const dataName = [
		'Employees Salary',
		'Material Supplies',
		'Company tax',
		'Maintenance system',
		'Development System',
		'Production Tools ',
	]
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
		labels: [
			'Employees Salary',
			'Material Supplies',
			'Company tax',
			'Maintenance system',
			'Development System',
			'Production Tools ',
		],
		datasets: [
			{
				label: 'Spends $',
				data: [8000, 2130, 1510, 2245, 4385, 1000],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
				],
				borderWidth: 1,
			},
		],
	}

	const doughnutLabel = {
		id: 'doughnutLabel',
		beforeDatasetsDraw(chart: any) {
			const { ctx, data } = chart
			const getTotalSum = data.datasets[0].data.reduce(
				(x: number, y: number) => x + y
			)
			ctx.save()
			const xCoor = chart.getDatasetMeta(0).data[0].x
			const yCoor = chart.getDatasetMeta(0).data[0].y

			ctx.textAlign = 'center'
			ctx.font = 'bold 12px sans-serif'
			ctx.fillStyle = '#000'
			ctx.textBaseline = 'middle'
			ctx.fillText(`Overall Spending $${getTotalSum}`, xCoor, yCoor)
		},
	}

	return (
		<div className={styles.doughnut}>
			<div className={styles.head}>
				<h2>Your balance</h2>
				<span>
					<BiDotsHorizontal />
				</span>
			</div>
			<Doughnut data={data} plugins={[doughnutLabel]} options={options} />
			<ul>
				{data.datasets[0].data.map((price, i) => {
					return (
						<li key={price}>
							{dataName[i]}
							<span>${price}</span>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
export { SpendByCategory }
