import React, { useState, useCallback } from 'react'
import { useInterval } from '@/hooks/useInterval'
import { DELAY } from '@/constants'
import { isNumberString, toHHMMSS } from '@/utils'

export const CounterSection: React.FC = () => {
  const [countDownTimer, setCountDownTimer] = useState<number>(0)
  const [timerInputValue, setTimerInputValue] = useState<string>('')

  useInterval(() => {
    if (!countDownTimer) {
      return
    }

    setCountDownTimer((preCountDownTimer) => preCountDownTimer - 1)
  }, DELAY)

  const onTimerInputChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value

      if (value === '' || isNumberString(value)) {
        setTimerInputValue(value)
      }
    },
    []
  )

  const onSetTimerClick = useCallback(() => {
    if (!timerInputValue) {
      return
    }

    setCountDownTimer(parseInt(timerInputValue, 10))
    setTimerInputValue('')
  }, [timerInputValue])

  return (
    <div>
      抽獎時間
      <input
        type="text"
        value={timerInputValue}
        onChange={onTimerInputChange}
      />
      分鐘
      <button onClick={onSetTimerClick}>設定</button>
      {toHHMMSS(countDownTimer.toString())}
    </div>
  )
}
