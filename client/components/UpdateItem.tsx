import { Item } from '../../models/item'
import { updateItemMudation } from '../hooks/useItems'

interface Props {
  item: Item
  setIsEdit: (id: number) => void
}

function UpdateItem(props: Props) {
  const mutationUpdate = updateItemMudation()

  function handleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')?.valueOf() as string
    const target = form.get('target')?.valueOf() as string
    const category = form.get('category')?.valueOf() as string
    const unit_price = form.get('unit_price')?.valueOf() as number
    const quantity = form.get('quantity')?.valueOf() as number
    const totalPrice = unit_price * quantity
    const where_to_buy = form.get('where_to_buy')?.valueOf() as string

    const updatedItem = {
      id: props.item.id,
      name,
      target,
      category,
      unit_price,
      quantity,
      total_price: totalPrice,
      where_to_buy,
      bought: props.item.bought,
    }

    mutationUpdate.mutate(updatedItem)

    props.setIsEdit(0)
  }

  function cancel() {
    props.setIsEdit(0)
  }
  return (
    <>
      <>
        <form onSubmit={handleClick}>
          <div>
            <label htmlFor="editName">Name: </label>
            <input
              type="text"
              id="editName"
              name="name"
              defaultValue={props.item.name}
            ></input>
          </div>
          <div>
            <label htmlFor="selectForTarget">Select for: </label>
            <select
              id="selectForTarget"
              name="target"
              defaultValue={props.item.target}
            >
              <option key="parent">parent</option>
              <option key="baby">baby</option>
            </select>
          </div>
          <div>
            <label htmlFor="editCategory">Category: </label>
            <input
              type="text"
              id="editCategory"
              name="category"
              defaultValue={props.item.category}
            ></input>
          </div>
          <div>
            <label htmlFor="editUnitPrice">Unit Price: </label>
            <input
              type="text"
              id="editUnitPrice"
              name="unit_price"
              defaultValue={props.item.unit_price}
            ></input>
          </div>
          <div>
            <label htmlFor="editQuantity">Quantity: </label>
            <input
              type="text"
              id="editQuantity"
              name="quantity"
              defaultValue={props.item.quantity}
            ></input>
          </div>
          <div>
            <label htmlFor="editWhereToBuy">Where To Buy: </label>
            <input
              type="text"
              id="editWhereToBuy"
              name="where_to_buy"
              defaultValue={props.item.where_to_buy}
            ></input>
          </div>
          <button className="border-2 border-green-500 bg-green-300 hover:bg-green-400">
            Save
          </button>
        </form>
        <button
          onClick={cancel}
          className="border-2 border-green-500 bg-green-300 hover:bg-green-400"
        >
          Cancel
        </button>
      </>
    </>
  )
}

export default UpdateItem
