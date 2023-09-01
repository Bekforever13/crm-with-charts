import { Statistic } from 'antd'
import { BiDotsHorizontal } from 'react-icons/bi'
import { UiButton } from 'src/components/ui/button/UiButton'
import topUpIcon from 'src/assets/img/money-recive.svg'
import transferIcon from 'src/assets/img/money-send.svg'
import styles from './YourBalance.module.scss'

const YourBalance: React.FC = () => {
	return (
		<div className={styles.balance}>
			<div className={styles.head}>
				<h2>Your balance</h2>
				<span>
					<BiDotsHorizontal />
				</span>
			</div>
			<div className={styles.statistic}>
				<div>
					<Statistic
						className={styles.money}
						value={'$120,435.0'}
						precision={2}
					/>
					<span className={styles.usd}> (USD)</span>
				</div>
				<p>From Jan 01, 2022 to Jan 31, 2022</p>
			</div>
			<div className={styles.buttons}>
				<UiButton size='large' type='primary'>
					<img src={topUpIcon} />
					Top UP
				</UiButton>
				<UiButton size='large' type='default'>
					<img src={transferIcon} />
					Transfer
				</UiButton>
			</div>
		</div>
	)
}
export { YourBalance }
