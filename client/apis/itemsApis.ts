import request from 'superagent'
import { Item, ItemData } from '../../models/item'

const rootUrl = '/api/v1/items'

export async function getAllItems() {
  const res = await request.get(rootUrl)
  return res.body as Item[]
}

export async function addItem(item: ItemData) {
  await request.post(rootUrl).send(item)
}

export async function deleteItem(id: number) {
  await request.delete(rootUrl + `/${id}`)
}

export async function updateItem(item: Item) {
  await request.patch(rootUrl + `/${item.id}`).send(item)
}
