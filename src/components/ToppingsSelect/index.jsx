import Topping from '../Topping'
import { useState } from 'react'
import './style.css'

const ToppingsSelect = ({ toppings }) => {
  const [selectedCount, setSelectedCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const handleToppingChange = (index, isSelected, price) => {
    const updatedToppings = [...toppings]
    updatedToppings[index].selected = isSelected
    const newSelectedCount = updatedToppings.filter(topping => topping.selected)
      .length
    setSelectedCount(newSelectedCount)

    const newTotalPrice = isSelected ? totalPrice + price : totalPrice - price
    setTotalPrice(newTotalPrice)
  }

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings: {selectedCount}, total price: {totalPrice} Euro
      </p>

      <div className='toppings'>
        {toppings.map((topping, index) => (
          <Topping
            topping={topping}
            key={topping.name}
            onChange={(isSelected, price) =>
              handleToppingChange(index, isSelected, price)
            }
          />
        ))}
      </div>
    </>
  )
}

export default ToppingsSelect
