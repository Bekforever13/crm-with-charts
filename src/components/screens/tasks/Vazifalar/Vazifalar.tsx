import { useSelectors } from 'src/hooks/useSelectors'
import styles from './Vazifalar.module.scss'

const Vazifalar: React.FC = () => {
	const { vazifalarOpen } = useSelectors()

	const data = [
		{
			id: 1.0,
			title:
				'Патруллик йўналиши хизмат олиб борилган вақтда жиноят содир этилмаган кунлар',
		},
		{
			id: 1.2,
			title:
				'Йўналишда хизмат вақтида кўча ва жамоат жойда содир этилган жиноятлар сони',
		},
		{
			id: '1.2.1',
			title:
				'Ушбу жиноятнинг йўналишдаги ходим томонидан “иссиқ издан” очилиши',
		},
		{
			id: 1.3,
			title:
				'Ходим томонидан ёки унинг ташаббуси билан олди олинган жиноятлар сони',
		},
		{
			id: 1.4,
			title:
				'Ходим томонидан шахсан фош этилган қотиллик, талончилик, босқинчилик, ҚБОШЕ, ўғрилик, безорилик сони (1.2.1-банддагидан ташқари)',
		},
		{
			id: 1.5,
			title:
				'Ходим томонидан шахсан фош этилган бошқа жиноятлар / Ходим иштирокида фош этилган жиноятлар (жиноятларнинг барча тури учун) / Ходим томонидан аниқланган қидирувда бўлган ва/ёки бедарак йўқолган шахслар сони',
		},
	]

	return (
		<div className={vazifalarOpen ? styles.vazifalar : styles.hide}>
			<h2>Vazifalar</h2>
			<ul>
				{data.map(item => {
					return (
						<li key={item.id}>
							<div>{item.id}</div>
							<span>{item.title}</span>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
export { Vazifalar }
