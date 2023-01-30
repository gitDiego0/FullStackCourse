const Total = ({ parts }) => {



  const sum = parts.reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual.exercises
  }, 0)

  return `total of ${sum} exercises`
}

export default Total
