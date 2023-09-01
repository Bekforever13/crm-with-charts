import React from 'react'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import styles from './ChartByMonth.module.scss'
import { Pagination } from 'antd'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const ChartByMonth: React.FC = () => {
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const,
				display: false,
			},
			title: {
				display: false,
			},
		},
	}

	const labels = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]

	const data = {
		labels,
		datasets: [
			{
				label: 'Dataset',
				data: [62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62],
				backgroundColor: '#725CFF',
			},
		],
	}

	return (
		<div className={styles.chart}>
			<div className={styles.head}>
				<h2>Иш натижалари самарадорлиги (ойлар кесимида)</h2>
				<Pagination current={2023} />
			</div>
			<Bar options={options} data={data} className={styles.bar} />
		</div>
	)
}
export { ChartByMonth }
