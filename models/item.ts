export interface ItemData {
  target: string
  category: string
  name: string
  unit_price: number
  quantity: number
  total_price: number
  where_to_buy: string
  bought: boolean
}

export interface Item extends ItemData {
  id: number
}
