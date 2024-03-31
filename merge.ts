export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  return [...collection_1, ...collection_2, ...collection_3]
}

export function isSortedAscending(numbers: number[]) {
  return numbers.every((value, index, array) => {
    if (index === 0) return true
    return value > array[index - 1]
  })
}

export function isSortedDecending(numbers: number[]) {
  return numbers.every((value, index, array) => {
    if (index === 0) return true
    return value < array[index - 1]
  })
}
