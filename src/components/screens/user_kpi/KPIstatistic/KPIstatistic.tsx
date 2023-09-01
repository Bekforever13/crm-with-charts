import icon from 'src/assets/img/ava.png'
import styles from './KPIstatistic.module.scss'

type TProps = {
	desc: string
	number: number
}

const KPIstatistic: React.FC<TProps> = ({ desc, number }) => {
	return (
		<div className={styles.statistics}>
			<img src={icon} />
			<div>
				<span>{number}</span>
				<p>{desc}</p>
			</div>
		</div>
	)
}
export { KPIstatistic }
