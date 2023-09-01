import React from 'react'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import { TotalStatistics } from 'src/components/shared/total_statistics/TotalStatistics'

const TotalIncome: React.FC = () => (
	<Row gutter={16}>
		<Col span={12}>
			<TotalStatistics
				title='Total income'
				value='$19,760.00'
				valueStyle={{ color: '#3f8600' }}
				prefix={<ArrowUpOutlined />}
				desc={'20% increase compared to last week'}
			/>
		</Col>
		<Col span={12}>
			<TotalStatistics
				title='Total Expense'
				value='$19,760.00'
				valueStyle={{ color: '#cf1322' }}
				prefix={<ArrowDownOutlined />}
				desc={'10% decrease compared to last week'}
			/>
		</Col>
	</Row>
)

export { TotalIncome }
