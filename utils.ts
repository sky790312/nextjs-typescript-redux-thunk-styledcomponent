/**
 *
 * @param value string
 *
 * check if a string is contain number only.
 */
export const isNumberString = (value: string) => {
  const regexNumberOnly = /^[0-9\b]+$/
  return regexNumberOnly.test(value)
}
/**
 *
 * @param time string
 *
 * format a second time string to MM:SS ex: toMMSS(61) => 01:01 (give 61 seond will show 01:01)
 */
export const toMMSS = (time: string) => {
  const second = parseInt(time, 10)
  const minutes = Math.floor(second / 60)
  const seconds = second - minutes * 60
  const showMinute = minutes < 10 ? '0' + minutes : minutes.toString()
  const showSecond = seconds < 10 ? '0' + seconds : seconds.toString()
  return showMinute + ':' + showSecond
}
/**
 *
 * @param min number
 * @param max number
 *
 * generate a ranom number by givin range. ex: genRandomNumber(1, 10) => 1 <= random number <= 10
 */
export const genRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
