import styles from './EmployeesTable.module.scss'
import { EmployeeTable } from './EmployeeTable/EmployeeTable'
import TableHead from './TableHead/TableHead'

const EmployeesTable: React.FC = () => {
	return (
		<div className={styles.table}>
			<TableHead />
			<EmployeeTable />
		</div>
	)
}
export { EmployeesTable }
