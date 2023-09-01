import { useSelectors } from 'src/hooks/useSelectors'
import styles from './Employees.module.scss'
import { EmployeesCategories } from './EmployeesCategories/EmployeesCategories'
import { EmployeesTable } from './EmployeesTable/EmployeesTable'
import { Filter } from './EmployeesTable/TableHead/filter/Filter'

const Employees: React.FC = () => {
	const { filterOpen } = useSelectors()
	return (
		<div className={styles.employees}>
			<EmployeesCategories />
			<div className={filterOpen ? styles.wrapper : ''}>
				<EmployeesTable />
				<Filter />
			</div>
		</div>
	)
}
export { Employees }
