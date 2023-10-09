import { useModal } from '../providers'

export const Item = ({ index }) => {
  const { setIsOpen } = useModal()

  return (
    <li className='item'>
      <p>Item {index + 1}</p>
      <button onClick={() => setIsOpen(true)}>Open modal</button>
    </li>
  )
}
