import { useState } from 'react'
import { addItemMudation } from '../hooks/useItems'
import { ItemData } from '../../models/item'

function AddItem() {
  const [input, setInput] = useState('')
  const mutation = addItemMudation()

  const handleAddItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      mutation.mutate({
        target: '',
        category: '',
        name: input,
        unit_price: 0,
        quantity: 0,
        total_price: 0,
        where_to_buy: '',
        bought: false,
      } as ItemData)
      setInput('')
    }
  }
  return (
    <>
      <input
        placeholder="What need to buy?"
        autoFocus={true}
        onKeyDown={handleAddItem}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  )
}

export default AddItem
