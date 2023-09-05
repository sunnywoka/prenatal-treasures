import connection from './connection.js'
import { Item, ItemData } from '../../models/item.js'

export async function getAllItems(db = connection): Promise<Item[]> {
  return db('items').select()
}

export async function addItem(item: ItemData, db = connection): Promise<Item> {
  return db('items').insert(item)
}

export async function deleteItem(id: number, db = connection): Promise<Item> {
  return db('items').where('id', id).delete()
}

export async function updateItem(
  id: number,
  item: ItemData,
  db = connection,
): Promise<Item> {
  return db('items')
    .where('id', id)
    .update('name', item.name)
    .update('target', item.target)
    .update('category', item.category)
    .update('unit_price', item.unit_price)
    .update('quantity', item.quantity)
    .update('total_price', item.total_price)
    .update('where_to_buy', item.where_to_buy)
}
