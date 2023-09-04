import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'

import { addItem } from '../apis/itemsApis.js'
import { ItemData } from '../../models/item.js'

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
