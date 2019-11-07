const formatDate = (dateStr, suffix = false) => {
  const [month, day, year] = new Date(dateStr)
    .toString()
    .split(" ")
    .slice(1, 4)

  if (!suffix) return `${month} ${+day}, ${year}`

  const chars = (() => {
    const num = +day.slice(-1)

    if (num === 1) return "st"
    if (num === 2) return "nd"
    if (num === 3) return "rd"
    return "th"
  })()

  return `${month} ${+day}${chars}, ${year}`
}

export { formatDate }