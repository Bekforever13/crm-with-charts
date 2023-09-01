import { useState } from 'react'
import Category from 'src/components/shared/category/Category'
import styles from './EmployeesCategories.module.scss'

const EmployeesCategories: React.FC = () => {
	const [activeCategory, setActiveCategory] = useState('All')

	const handleClick = (text: string) => {
		setActiveCategory(text)
		console.log(text)
	}
	return (
		<div className={styles.categories}>
			<Category
				onClick={() => handleClick('All')}
				active={activeCategory}
				text='All'
				number={20}
			/>
			<Category
				onClick={() => handleClick('Lorem')}
				active={activeCategory}
				text='Lorem'
				number={12}
			/>
			<Category
				onClick={() => handleClick('Ipsum')}
				active={activeCategory}
				text='Ipsum'
				number={12}
			/>
			<Category
				onClick={() => handleClick('Dolor')}
				active={activeCategory}
				text='Dolor'
				number={12}
			/>
		</div>
	)
}
export { EmployeesCategories }
