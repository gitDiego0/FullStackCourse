const Total = ({parts}) => {
  let sum = 0
  parts.map((part) => (
    sum += part.exercises
  ))
  return sum
}

export default Total
