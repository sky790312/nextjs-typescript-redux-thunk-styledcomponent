import React, { useState, useCallback } from 'react'
import { User } from '@/components/User'
import { UserSchema } from '@/schema/userSchema'
import styled from 'styled-components/'

const USERS: UserSchema[] = [
  { id: 1, name: 'Kevin' },
  { id: 2, name: 'Steve' },
  { id: 3, name: 'Calvin' },
  { id: 4, name: 'Diana' },
  { id: 5, name: 'Joe' },
  { id: 6, name: 'Jack' },
  { id: 7, name: 'Ray' },
  { id: 8, name: 'Allen' },
  { id: 9, name: 'Zoe' },
  { id: 10, name: 'James' },
]

export const UsersSection: React.FC = () => {
  // const [timerInputValue, setTimerInputValue] = useState<string>('')

  // const onTimerInputChange = useCallback(
  //   (e: React.FormEvent<HTMLInputElement>) => {
  //     const value = e.currentTarget.value

  //     if (value === '' || isNumberString(value)) {
  //       setTimerInputValue(value)
  //     }
  //   },
  //   []
  // )

  return (
    <div>
      <h1>參與抽獎名單</h1>
      <UsersContainer>
        {USERS.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </UsersContainer>
    </div>
  )
}
const UsersContainer = styled.div`
  max-height: 480px;
  overflow: auto;
`
