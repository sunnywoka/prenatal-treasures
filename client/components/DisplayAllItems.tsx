import { useState } from 'react'
import { getAllItems } from '../apis/itemsApis.js'
import { useQuery } from '@tanstack/react-query'
import AddItem from './AddItem.js'

function DisplayAllItems() {
  const { data } = useQuery(['items'], getAllItems)

  const categories = [...new Set(data?.map((item) => item.category || ''))]
  const targets = [...new Set(data?.map((item) => item.target || ''))]

  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedTarget, setSelectedTarget] = useState('')

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedCategory(event.target.value)
  }

  const handleTargetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTarget(event.target.value)
  }

  return (
    <>
      <AddItem />
      <div>
        <select value={selectedTarget} onChange={handleTargetChange}>
          <option value={''}>--Select--</option>
          {targets.map((target, index) => (
            <option value={target} key={index}>
              {target}
            </option>
          ))}
        </select>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value={''}>--Category--</option>
          {categories.map((category, index) => (
            <option value={category} key={index}>
              {category}
            </option>
          ))}
        </select>
        <ul>
          {data &&
            data
              .filter((item) => {
                // Apply filters based on selectedCategory and selectedTarget
                if (selectedCategory && item.category !== selectedCategory) {
                  return false
                }
                if (selectedTarget && item.target !== selectedTarget) {
                  return false
                }
                return true
              })
              .map((item) => (
                <div key={item.id}>
                  <p>
                    Name: <a href={item.where_to_buy}>{item.name}</a>
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Cost: ${item.total_price}</p>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              ))}
        </ul>
      </div>
    </>
  )
}

export default DisplayAllItems
