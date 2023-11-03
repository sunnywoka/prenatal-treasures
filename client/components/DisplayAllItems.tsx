import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllItems } from '../apis/itemsApis.js'
import { deleteItemMudation } from '../hooks/useItems.js'
import AddItem from './AddItem.js'
import UpdateItem from './UpdateItem.js'

function DisplayAllItems() {
  const { data } = useQuery(['items'], getAllItems)
  const mutationDelete = deleteItemMudation()

  const categories = [...new Set(data?.map((item) => item.category || ''))]
  const targets = [...new Set(data?.map((item) => item.target || ''))]

  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedTarget, setSelectedTarget] = useState('')
  const [isEdit, setIsEdit] = useState(0)

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedCategory(event.target.value)
  }

  const handleTargetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTarget(event.target.value)
  }

  function handleStartEdit(id: number) {
    setIsEdit(id)
  }

  return (
    <>
      <AddItem />
      <div>
        <select
          value={selectedTarget}
          onChange={handleTargetChange}
          className="m-2 border-2 border-green-500"
        >
          <option value={''}>--Select--</option>
          {targets.map((target, index) => (
            <option value={target} key={index}>
              {target}
            </option>
          ))}
        </select>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="m-2 border-2 border-green-500"
        >
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
                  console.log(selectedCategory && item.category)
                  return false
                }
                if (selectedTarget && item.target !== selectedTarget) {
                  return false
                }
                return true
              })
              .map((item) =>
                isEdit !== item.id ? (
                  <div
                    key={item.id}
                    className="m-auto my-2 w-1/2 2xl:w-1/4 xl:w-1/3 lg:w-1/3 border-2 border-green-500"
                  >
                    <p>
                      <b>Name:</b> <a href={item.where_to_buy}>{item.name}</a>
                    </p>
                    <p>
                      <b>Quantity:</b> {item.quantity}
                    </p>
                    <p>
                      <b>Cost:</b> ${item.total_price}
                    </p>
                    <button
                      onClick={() => handleStartEdit(item.id)}
                      className="m-2 border-2 border-green-500 bg-green-300 hover:bg-green-400"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => mutationDelete.mutate(item.id)}
                      className="m-2 border-2 border-green-500 bg-green-300 hover:bg-green-400"
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <div key={item.id}>
                    <UpdateItem item={item} setIsEdit={setIsEdit} />
                  </div>
                ),
              )}
        </ul>
      </div>
    </>
  )
}

export default DisplayAllItems
