export const isNumberString = (value: string) => {
  const regexNumberOnly = /^[0-9\b]+$/
  return regexNumberOnly.test(value)
}

export const toHHMMSS = (time: string) => {
  const second = parseInt(time, 10)
  const hours = Math.floor(second / 3600)
  const minutes = Math.floor((second - hours * 3600) / 60)
  const seconds = second - hours * 3600 - minutes * 60
  const showHour = hours < 10 ? '0' + hours : hours.toString()
  const showMinute = minutes < 10 ? '0' + minutes : minutes.toString()
  const showSecond = seconds < 10 ? '0' + seconds : seconds.toString()
  return showHour + ':' + showMinute + ':' + showSecond
}
