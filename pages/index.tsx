import { useEffect, useRef } from 'react'
import Head from 'next/head'
import { RootState } from '@/store/index'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { usersActions } from '@/store/state.users'
import styled from 'styled-components/'
import { Container } from '@/GlobalStyles'
import { CounterSection } from '@/components/CounterSection'
import { UsersSection } from '@/components/UsersSection'
import { ResultSection } from '@/components/ResultSection'
import { setRandomNumber } from '@/utils'

export const Home = (): JSX.Element => {
  const dispatch: Dispatch = useDispatch()
  const { setWinnerUser } = usersActions
  const timer = useSelector(
    (state: RootState) => state.counter.timer,
    shallowEqual
  )
  const users = useSelector(
    (state: RootState) => state.users.users,
    shallowEqual
  )
  const winnerUser = useSelector(
    (state: RootState) => state.users.winnerUser,
    shallowEqual
  )
  const firstUpdate = useRef(true)

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }

    if (!timer) {
      const min = users[0].id
      const max = users[users.length - 1].id
      const randomWinnerId = setRandomNumber(min, max)
      const randomWinnerUser = users.find((user) => user.id === randomWinnerId)
      dispatch(setWinnerUser(randomWinnerUser))
    }
  }, [timer, users, dispatch, setWinnerUser])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        {winnerUser ? (
          <ResultSection />
        ) : (
          <>
            <CounterSection />
            <UsersSection />
          </>
        )}
      </MainContainer>
    </>
  )
}

const MainContainer = styled(Container)`
  @media (min-width: 1140px) {
    display: flex;

    > div {
      flex: 1;
    }
  }
`

export default Home
