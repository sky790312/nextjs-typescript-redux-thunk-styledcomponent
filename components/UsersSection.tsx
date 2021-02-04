import React, { useState, useCallback } from 'react'
import { User } from '@/components/User'
import styled from 'styled-components/'
import { FAKE_USERS } from '@/constants'

export const UsersSection: React.FC = () => {
  return (
    <div>
      <h1>參與抽獎名單</h1>
      <UsersContainer>
        {FAKE_USERS.map((user) => (
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
