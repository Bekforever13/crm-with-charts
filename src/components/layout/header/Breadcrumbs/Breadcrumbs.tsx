import { Breadcrumb } from 'antd'
import { useLocation } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons'

const Breadcrumbs: React.FC = () => {
	const { pathname } = useLocation()
	const pathnames = pathname.split('/').filter(item => item)
	const capatilize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

	// Создаем массив объектов для каждого элемента хлебных крошек
	const items = pathnames.map((name, index) => {
		const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
		const isLast = index === pathnames.length - 1
		return {
			title: capatilize(name), // Заголовок элемента
			path: isLast ? undefined : routeTo, // Путь к элементу, если он не последний
			icon: index === 0 ? <HomeOutlined /> : null, // Иконка для первого элемента
		}
	})

	// Добавляем домашнюю страницу в начало массива
	items.unshift({
		title: 'Home',
		path: '/',
		icon: <HomeOutlined />,
	})

	return <Breadcrumb items={items} />
}

export { Breadcrumbs }
