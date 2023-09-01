import React from 'react'
import { Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import bankIcon from 'src/assets/img/bank.png'
import figmaIcon from 'src/assets/img/figma.png'
import paypalIcon from 'src/assets/img/paypal.png'

interface DataType {
	key?: string
	transactions: string
	date: string
	amount: string
	status: string
	icon: any
}

const columns: ColumnsType<DataType> = [
	{
		title: 'Transactions',
		dataIndex: 'transactions',
		key: 'transactions',
		render: (text, r) => (
			<a
				href='#'
				style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
			>
				<img src={r.icon} />
				{text}
			</a>
		),
	},
	{
		title: 'Date',
		dataIndex: 'date',
		key: 'date',
	},
	{
		title: 'Amount',
		dataIndex: 'amount',
		key: 'amount',
	},
	{
		title: 'Status',
		key: 'status',
		dataIndex: 'status',
		render: (_, { status }) => {
			let color = 'yellow'
			if (status === 'Completed') {
				color = 'green'
			} else if (status === 'On Hold') {
				color = 'red'
			}
			return (
				<>
					<Tag color={color} key={status}>
						{status.toUpperCase()}
					</Tag>
				</>
			)
		},
	},
]

const data: DataType[] = [
	{
		key: '1',
		transactions: 'Bank',
		date: 'Jan 01,2022',
		amount: '$2,000.00',
		status: 'Completed',
		icon: bankIcon,
	},
	{
		key: '2',
		transactions: 'Bank Transfer',
		date: 'Jan 01,2022',
		amount: '$2,000.00',
		status: 'Pending ',
		icon: paypalIcon,
	},
	{
		key: '3',
		transactions: 'Bank Transfer',
		date: 'Jan 01,2022',
		amount: '$2,000.00',
		status: 'On Hold',
		icon: figmaIcon,
	},
]

const TransactionHistory: React.FC = () => (
	<Table columns={columns} pagination={false} dataSource={data} />
)

export { TransactionHistory }
