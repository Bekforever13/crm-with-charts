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
import styles from './SpendingStatistics.module.scss'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const SpendingStatistics: React.FC = () => {
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const,
				display: false,
			},
			title: {
				display: true,
				text: 'Spending Statistics',
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
				data: [
					10500, 3000, 14000, 7500, 4700, 15000, 6300, 9000, 14000, 12000, 6000,
					13000,
				],
				backgroundColor: '#4623E9',
			},
		],
	}

	return <Bar options={options} data={data} className={styles.bar} />
}
export { SpendingStatistics }
