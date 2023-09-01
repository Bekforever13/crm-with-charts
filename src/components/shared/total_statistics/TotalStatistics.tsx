import { Card, Statistic } from 'antd'

type TProps = {
	title: string
	value: string
	valueStyle: React.CSSProperties
	prefix: React.ReactNode
	desc: string
}

const TotalStatistics: React.FC<TProps> = props => {
	const { title, value, prefix, valueStyle, desc } = props
	return (
		<Card bordered={false}>
			<Statistic
				title={title}
				value={value}
				precision={2}
				valueStyle={valueStyle}
				prefix={prefix}
			/>
			<div>{desc}</div>
		</Card>
	)
}
export { TotalStatistics }
