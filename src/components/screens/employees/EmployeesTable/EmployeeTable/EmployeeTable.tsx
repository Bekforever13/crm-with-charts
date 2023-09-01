import React from 'react'
import { DownOutlined } from '@ant-design/icons'
import { Space, Table } from 'antd'
import type { ColumnsType, TableProps } from 'antd/es/table'
import s from './EmployeeTable.module.scss'

interface DataType {
	key: number
	name: string
	age: number
	address: string
	description: string
}

const columns: ColumnsType<DataType> = [
	{
		title: 'Name',
		dataIndex: 'name',
	},
	{
		title: 'Age',
		dataIndex: 'age',
		sorter: (a, b) => a.age - b.age,
	},
	{
		title: 'Address',
		dataIndex: 'address',
		filters: [
			{
				text: 'London',
				value: 'London',
			},
			{
				text: 'New York',
				value: 'New York',
			},
		],
		onFilter: (value, record) => record.address.indexOf(value as string) === 0,
	},
	{
		title: 'Action',
		key: 'action',
		sorter: true,
		render: () => (
			<Space size='middle'>
				<a>Delete</a>
				<a>
					<Space>
						More actions
						<DownOutlined />
					</Space>
				</a>
			</Space>
		),
	},
]

const data: DataType[] = []
for (let i = 1; i <= 5; i++) {
	data.push({
		key: i,
		name: 'John Brown',
		age: Number(`${i}2`),
		address: `New York No. ${i} Lake Park`,
		description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
	})
}

const EmployeeTable: React.FC = () => {
	const bordered = false
	const loading = false
	const size = 'large'
	const showHeader = true
	const rowSelection = {}
	const hasData = true
	let tableLayout
	const bottom = 'bottomRight'
	const ellipsis = false

	const tableColumns = columns.map(item => ({ ...item, ellipsis }))

	const tableProps: TableProps<DataType> = {
		bordered,
		loading,
		size,
		showHeader,
		rowSelection,
		tableLayout,
	}

	return (
		<div className={s.table}>
			<Table
				{...tableProps}
				pagination={{
					showSizeChanger: true,
					position: [bottom],
				}}
				columns={tableColumns}
				dataSource={hasData ? data : []}
			/>
		</div>
	)
}

export { EmployeeTable }
