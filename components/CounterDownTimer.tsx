import React from 'react'
import { toMMSS } from '@/utils'
import styled from 'styled-components/'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from '@/store/index'

export const CounterDownTimer: React.FC = () => {
  const timer = useSelector(
    (state: RootState) => state.counter.timer,
    shallowEqual
  )

  return (
    <div>
      <StyledCountDownTimer>{toMMSS(timer.toString())}</StyledCountDownTimer>
    </div>
  )
}

const StyledCountDownTimer = styled.div`
  margin: 40px;
  font-size: 10rem;
  color: ${({ theme }) => theme.colors.blue};
`