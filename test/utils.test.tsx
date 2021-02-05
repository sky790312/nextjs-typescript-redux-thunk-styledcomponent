import { isNumberString, toMMSS, setRandomNumber } from '@/utils'

describe('isNumberString spec', () => {
  it('should check isNumberString correctly', () => {
    const notOnlyNumberString = '1a321321f'
    expect(isNumberString(notOnlyNumberString)).toBe(false)
    const onlyNumberString = '3212321'
    expect(isNumberString(onlyNumberString)).toBe(true)
  })
})

describe('toMMSS spec', () => {
  it('should format seconds string toMMSS correctly', () => {
    const time1 = {
      seconds: '59',
      showMMSS: '00:59',
    }
    expect(toMMSS(time1.seconds)).toBe(time1.showMMSS)
    const time2 = {
      seconds: '300',
      showMMSS: '05:00',
    }
    expect(toMMSS(time2.seconds)).toBe(time2.showMMSS)
    const time3 = {
      seconds: '3601',
      showMMSS: '60:01',
    }
    expect(toMMSS(time3.seconds)).toBe(time3.showMMSS)
  })
})

describe('setRandomNumber spec', () => {
  it('should check isNumberString correctly', () => {
    const randomNumberRange = {
      min: 1,
      max: 10,
    }
    expect(
      setRandomNumber(randomNumberRange.min, randomNumberRange.max)
    ).toBeGreaterThanOrEqual(randomNumberRange.min)
    expect(
      setRandomNumber(randomNumberRange.min, randomNumberRange.max)
    ).toBeLessThanOrEqual(randomNumberRange.max)
  })
})
