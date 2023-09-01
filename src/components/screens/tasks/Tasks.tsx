import styles from './Tasks.module.scss'
import Category from 'src/components/shared/category/Category'
import { useState } from 'react'
import { TasksTable } from './TasksTable/TasksTable'
import { TasksHead } from './TasksHead/TasksHead'
import { Vazifalar } from './Vazifalar/Vazifalar'
import { useSelectors } from 'src/hooks/useSelectors'

const Tasks: React.FC = () => {
	const [activeCategory, setActiveCategory] = useState('1-вазифа')
	const { vazifalarOpen } = useSelectors()

	const handleClick = (text: string) => {
		setActiveCategory(text)
		console.log(text)
	}
	return (
		<div className={styles.tasks}>
			<TasksHead />
			<div className={styles.categories}>
				<Category
					onClick={() => handleClick('1-вазифа')}
					active={activeCategory}
					text='1-вазифа'
					number={20}
				/>
				<Category
					onClick={() => handleClick('2-вазифа')}
					active={activeCategory}
					text='2-вазифа'
					number={20}
				/>
				<Category
					onClick={() => handleClick('3-вазифа')}
					active={activeCategory}
					text='3-вазифа'
					number={20}
				/>
				<Category
					onClick={() => handleClick('4-вазифа')}
					active={activeCategory}
					text='4-вазифа'
					number={20}
				/>
			</div>
			<div className={vazifalarOpen ? styles.wrapper : ''}>
				<TasksTable />
				<Vazifalar />
			</div>
		</div>
	)
}
export { Tasks }
