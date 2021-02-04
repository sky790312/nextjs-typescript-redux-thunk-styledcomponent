export const isNumberString = (value: string) => {
  const regexNumberOnly = /^[0-9\b]+$/
  return regexNumberOnly.test(value)
}

export const toMMSS = (time: string) => {
  const second = parseInt(time, 10)
  const minutes = Math.floor(second / 60)
  const seconds = second - minutes * 60
  const showMinute = minutes < 10 ? '0' + minutes : minutes.toString()
  const showSecond = seconds < 10 ? '0' + seconds : seconds.toString()
  return showMinute + ':' + showSecond
}
