import React from 'react'
import { CounterDownForm } from '@/components/CounterDownForm'
import { CounterDownTimer } from '@/components/CounterDownTimer'

export const CounterSection: React.FC = React.memo(() => {
  return (
    <div>
      <h1>抽獎時間</h1>
      <CounterDownForm />
      <CounterDownTimer />
    </div>
  )
})
