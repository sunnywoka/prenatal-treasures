import connection from './connection.js'
import { Item, ItemData } from '../../models/item.js'

export async function getAllItems(db = connection): Promise<Item[]> {
  return db('items').select()
}

export async function addItem(item: ItemData, db = connection): Promise<Item> {
  return db('items').insert(item)
}
