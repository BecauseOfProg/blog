function imageProxy(url, width = 0, height = 0) {
  const urlObj = new URL(url)
  let proxy = `https://i.cdn.becauseofprog.fr/${urlObj.host}${urlObj.pathname}?`

  if (height !== 0 && width !== 0)
    proxy += `resize=${width},${height}`
  else if (height === 0)
    proxy += `w=${width}`
  else if (width === 0)
    proxy += `h=${height}`

  return proxy
}

export { imageProxy }
