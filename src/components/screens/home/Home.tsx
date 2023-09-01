import styles from './Home.module.scss'
import { SpendByCategory } from './spend_by_category/SpendByCategory'
import { SpendingStatistics } from './spending_statistics/SpendingStatistics'
import { TotalIncome } from './total_income/TotalIncome'
import { TransactionHistory } from './transaction_history/TransactionHistory'
import { YourBalance } from '../../shared/your_balance/YourBalance'

const Home: React.FC = () => {
	return (
		<div className={styles.home}>
			<div className={styles.left}>
				<SpendingStatistics />
				<TransactionHistory />
				<TotalIncome />
			</div>
			<div className={styles.right}>
				<YourBalance />
				<SpendByCategory />
			</div>
		</div>
	)
}
export { Home }
