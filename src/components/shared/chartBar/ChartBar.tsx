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
import styles from './ChartBar.module.scss'
import { Pagination } from 'antd'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const ChartBar: React.FC = () => {
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

	const labels = ['I-чорак', 'II-чорак', 'III-чорак', 'IV-чорак']

	const data = {
		labels,
		datasets: [
			{
				label: 'Dataset',
				data: [57, 37, 27, 37],
				backgroundColor: '#A1A9FE',
			},
			{
				label: 'Dataset',
				data: [32, 42, 22, 32],
				backgroundColor: '#EB7CA6',
			},
			{
				label: 'Dataset',
				data: [62, 52, 42, 62],
				backgroundColor: '#725CFF',
			},
			{
				label: 'Dataset',
				data: [44, 22, 33, 71],
				backgroundColor: '#5CAFFC',
			},
		],
	}

	return (
		<div className={styles.chart}>
			<div className={styles.head}>
				<h2>Иш натижалари самарадорлиги (чорак кесимида)</h2>
				<Pagination current={2023} />
			</div>
			<Bar options={options} data={data} className={styles.bar} />
		</div>
	)
}
export { ChartBar }
