import request from 'superagent'
import { Item } from '../../models/item'

const rootUrl = '/api/v1/items'

export async function getAllItems() {
  const res = await request.get(rootUrl)
  return res.body as Item[]
}
