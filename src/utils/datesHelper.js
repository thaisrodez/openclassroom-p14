const range = (start, stop) =>
  Array.from({ length: stop - start }, (_, i) => start + i)

export const years = range(1990, new Date().getFullYear() + 10)
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
