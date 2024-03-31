import { isSortedAscending, isSortedDecending } from './merge'

test('check is array sorted correct', () => {
  const collection_1 = [1, 2, 3]
  const collection_2 = [6, 5, 4]
  const collection_3 = [7, 8, 9]

  expect(isSortedAscending(collection_1)).toBe(true)
  expect(isSortedDecending(collection_2)).toBe(true)
  expect(isSortedAscending(collection_3)).toBe(true)
})
