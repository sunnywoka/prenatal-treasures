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
      <div className="text-left m-auto my-2 w-1/2 2xl:w-1/4 xl:w-1/3 lg:w-1/3 border-2 border-green-500">
        <form onSubmit={handleClick}>
          <div>
            <label htmlFor="editName" className="font-bold">
              Name:{' '}
            </label>
            <input
              type="text"
              id="editName"
              name="name"
              defaultValue={props.item.name}
              className="m-2 border-2 border-green-500"
            ></input>
          </div>
          <div>
            <label htmlFor="selectForTarget" className="font-bold">
              Select for:{' '}
            </label>
            <select
              id="selectForTarget"
              name="target"
              defaultValue={props.item.target}
              className="m-2 border-2 border-green-500"
            >
              <option key="parent">parent</option>
              <option key="baby">baby</option>
            </select>
          </div>
          <div>
            <label htmlFor="editCategory" className="font-bold">
              Category:{' '}
            </label>
            <input
              type="text"
              id="editCategory"
              name="category"
              defaultValue={props.item.category}
              className="m-2 border-2 border-green-500"
            ></input>
          </div>
          <div>
            <label htmlFor="editUnitPrice" className="font-bold">
              Unit Price:{' '}
            </label>
            <input
              type="text"
              id="editUnitPrice"
              name="unit_price"
              defaultValue={props.item.unit_price}
              className="m-2 border-2 border-green-500"
            ></input>
          </div>
          <div>
            <label htmlFor="editQuantity" className="font-bold">
              Quantity:{' '}
            </label>
            <input
              type="text"
              id="editQuantity"
              name="quantity"
              defaultValue={props.item.quantity}
              className="m-2 border-2 border-green-500"
            ></input>
          </div>
          <div>
            <label htmlFor="editWhereToBuy" className="font-bold">
              Where To Buy:{' '}
            </label>
            <input
              type="text"
              id="editWhereToBuy"
              name="where_to_buy"
              defaultValue={
                props.item.where_to_buy.length == 0
                  ? 'Paste link of items'
                  : props.item.where_to_buy
              }
              className="m-2 border-2 border-green-500"
            ></input>
          </div>
          <button className="m-2 border-2 border-green-500 bg-green-300 hover:bg-green-400">
            Save
          </button>
        </form>
        <button
          onClick={cancel}
          className="m-2 border-2 border-green-500 bg-green-300 hover:bg-green-400"
        >
          Cancel
        </button>
      </div>
    </>
  )
}

export default UpdateItem
