function imageProxy(url, width = '', height = '') {
  return `https://p.cdn.becauseofprog.fr/${width}x${height}/${url}`
}

export { imageProxy }
