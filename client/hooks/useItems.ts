import { useMutation, useQueryClient } from '@tanstack/react-query'

import { addItem, deleteItem, updateItem } from '../apis/itemsApis.js'
import { Item, ItemData } from '../../models/item.js'

export function addItemMudation() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const queryClient = useQueryClient()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const mutationAdd = useMutation({
    mutationFn: (item: ItemData) => addItem(item),
    onSuccess: () => {
      queryClient.invalidateQueries(['items'])
    },
  })
  return mutationAdd
}

export function deleteItemMudation() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const queryClient = useQueryClient()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const mutationDelete = useMutation({
    mutationFn: (id: number) => deleteItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['items'])
    },
  })
  return mutationDelete
}

export function updateItemMudation() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const queryClient = useQueryClient()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const mutationDelete = useMutation({
    mutationFn: (item: Item) => updateItem(item),
    onSuccess: () => {
      queryClient.invalidateQueries(['items'])
    },
  })
  return mutationDelete
}
