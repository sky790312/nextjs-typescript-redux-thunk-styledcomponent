import React, { useState, useCallback } from 'react'
import { useInterval } from '@/hooks/useInterval'
import { DELAY_TIME } from '@/constants'
import { isNumberString, toMMSS } from '@/utils'
import styled from 'styled-components/'

export const CounterSection: React.FC = () => {
  const [countDownTimer, setCountDownTimer] = useState<number>(0)
  const [timerInputValue, setTimerInputValue] = useState<string>('')

  useInterval(() => {
    if (!countDownTimer) {
      return
    }

    setCountDownTimer((preCountDownTimer) => preCountDownTimer - 1)
  }, DELAY_TIME)

  const onTimerInputChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value

      if (value === '' || isNumberString(value)) {
        setTimerInputValue(value)
      }
    },
    []
  )

  const setTimer = useCallback(() => {
    if (!timerInputValue) {
      return
    }

    setCountDownTimer(parseInt(timerInputValue, 10))
    setTimerInputValue('')
  }, [timerInputValue])

  return (
    <div>
      <h1>抽獎時間</h1>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          setTimer()
        }}
      >
        <input
          type="text"
          value={timerInputValue}
          onChange={onTimerInputChange}
        />
        分鐘
        <button onClick={setTimer}>設定</button>
      </form>
      <StyledCountDownTimer>
        {toMMSS(countDownTimer.toString())}
      </StyledCountDownTimer>
    </div>
  )
}

const StyledCountDownTimer = styled.div`
  font-size: 10rem;
  color: ${({ theme }) => theme.colors.blue};
`
