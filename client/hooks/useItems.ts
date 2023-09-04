import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
// import { getAllItems } from '../apis/itemsApis.js'

// export function useItems() {
//   const query = useQuery(['items'], getAllItems)
//   return {
//     ...query,
//   }
// }

// export function useItemsMutation() {
//   const queryClient = useQueryClient()
//   const mutation = useMutation({
//     mutationFn:
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['items'] })
//     },
//   })

//   return mutation
// }

// Query functions go here e.g. useAddFruit
/* function useAddFruit() {
  return useFruitsMutation(addFruit)
} */

//<TData = unknown, TVariables = unknown>(
//   mutationFn: MutationFunction<TData, TVariables>,
// )
