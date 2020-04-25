const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

  const description = $('#description')
  const calories = $('#calories')
  const protein = $('#protein')

  description.val()

