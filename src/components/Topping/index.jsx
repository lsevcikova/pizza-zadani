import Check from '../Check'
import { useState } from 'react'
import './style.css'

const Topping = ({ topping, onChange}) => {
  const [checked, setChecked] = useState(false)

  const handleCheckChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked, topping.price);
  };

  return (
    <div className='topping'>
      <Check checked={checked} onChange={handleCheckChange} />
      <span className='topping__content'>
        {topping.name}: {topping.price} €
      </span>
    </div>
  )
}

export default Topping
