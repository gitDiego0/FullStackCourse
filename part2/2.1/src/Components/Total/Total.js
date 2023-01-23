const Total = ({ parts }) => {
  let sum = 0
  parts.map((part) => (
    sum += part.exercises
  ))
  return `total of ${sum} exercises`
}

export default Total
