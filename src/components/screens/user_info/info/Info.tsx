import styles from './Info.module.scss'
import avatar from 'src/assets/img/info.png'
import { InfoTable } from './InfoTable'

const Info: React.FC = () => {
	return (
		<div className={styles.info}>
			<img src={avatar} />
			<InfoTable />
		</div>
	)
}
export { Info }
