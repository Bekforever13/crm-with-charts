import React from 'react'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
	key: string
	ifo: string
	day: string
	1.1: string
	1.2: string
	1.3: string
	1.4: string
	1.5: string
}

const columns: ColumnsType<DataType> = [
	{
		title: 'IFO',
		dataIndex: 'ifo',
		key: 'ifo',
		render: (text) => <span style={{whiteSpace: 'nowrap'}}>{text}</span>
	},
	{
		title:
			'Хизматга чиққан кун / Патруллик йўналишида хизмат олиб борилган кун',
		dataIndex: 'day',
		key: 'day',
	},
	{
		title: '1.1',
		dataIndex: '1.1',
		key: '1.1',
	},
	{
		title: '1.2',
		dataIndex: '1.2',
		key: '1.2',
	},
	{
		title: '1.3',
		dataIndex: '1.3',
		key: '1.3',
	},
	{
		title: '1.4',
		dataIndex: '1.4',
		key: '1.4',
	},
	{
		title: '1.5',
		dataIndex: '1.5',
		key: '1.5',
	},
]

const data: DataType[] = [
	{
		key: '1',
		ifo: '1-гр. ком. Ж.Ахранов',
		day: '31 / 28',
		1.1: '20,0 / 28',
		1.2: '20,0 / 28',
		1.3: '20,0 / 28',
		1.4: '20,0 / 28',
		1.5: '20,0 / 28',
	},
	{
		key: '2',
		ifo: '1-гр. ком. Ж.Ахранов',
		day: '31 / 28',
		1.1: '20,0 / 28',
		1.2: '20,0 / 28',
		1.3: '20,0 / 28',
		1.4: '20,0 / 28',
		1.5: '20,0 / 28',
	},
	{
		key: '3',
		ifo: '1-гр. ком. Ж.Ахранов',
		day: '31 / 28',
		1.1: '20,0 / 28',
		1.2: '20,0 / 28',
		1.3: '20,0 / 28',
		1.4: '20,0 / 28',
		1.5: '20,0 / 28',
	},
]

const TasksTable: React.FC = () => (
	<Table pagination={false} columns={columns} dataSource={data} />
)

export { TasksTable }
