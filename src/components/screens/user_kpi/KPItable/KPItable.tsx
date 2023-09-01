import React from 'react'
import styles from './KPItable.module.scss'

const data = [
	{
		key: 'Ходимлар сони штат бўйича:',
		value: 1,
	},
	{
		key: 'Вакант:',
		value: 2,
	},
	{
		key: 'Рўйхат бўйича:',
		value: 3,
	},
	{
		key: 'Меҳнат таътилида:',
		value: 4,
	},
	{
		key: 'Сабабли:',
		value: 5,
	},
	{
		key: 'Сабабсиз:',
		value: 6,
	},
	{
		key: 'Кунлик хизматга чиқиш меъёри:',
		value: 7,
	},
	{
		key: 'Кунлик хизматга чиққан ходимлар:',
		value: 8,
	},
	{
		key: 'Патруллик йўналишида хизмат олиб борган ходимлар:',
		value: 9,
	},
]

const KPItable: React.FC = () => {
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

export { KPItable }
