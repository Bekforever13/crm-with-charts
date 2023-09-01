import s from './Category.module.scss'

type TCategoryProps = {
	text: string
	number: number
	onClick: () => void
	active: string
}

const Category: React.FC<TCategoryProps> = ({
	onClick,
	text,
	number,
	active,
}) => {
	return (
		<div
			onClick={onClick}
			className={
				s.category +
				' ' +
				(text.toLowerCase() === active.toLowerCase() ? s.active : '')
			}
		>
			<h3>{text}</h3>
			<span>{number}</span>
		</div>
	)
}
export default Category
