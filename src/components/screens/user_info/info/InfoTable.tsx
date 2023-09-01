import React from 'react'
import styles from './Info.module.scss'

const data = [
	{
		key: 'Ҳудуд:',
		value: 'Андижон',
	},
	{
		key: 'Туман (шаҳар):',
		value: 'Андижон ш.',
	},
	{
		key: 'Маҳалла:',
		value: 'Андижон МФЙ',
	},
	{
		key: 'Лавозими:',
		value: 'Инспектор',
	},
	{
		key: 'Унвони:',
		value: 'Капитан',
	},
	{
		key: 'Туғилган санаси:',
		value: '12.01.1980',
	},
	{
		key: 'Телефон рақами:',
		value: '+99890 123-45-67',
	},
	{
		key: 'Паспорт серия ва рақами:',
		value: 'АА 1234567',
	},
	{
		key: 'Гувоҳнома рақами:',
		value: '123456789',
	},
]

const InfoTable: React.FC = () => {
	return (
		<ul className={styles.table}>
			{data?.map(item => {
				return (
					<li key={item.key}>
						<div>{item.key}</div>
						<span>{item.value}</span>
					</li>
				)
			})}
		</ul>
	)
}

export { InfoTable }
