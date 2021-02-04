import Head from 'next/head'
import { RootState } from '@/store/index'
import { useSelector, shallowEqual } from 'react-redux'
// import { useCallback } from 'react'
import styled from 'styled-components/'
import { Container } from '@/GlobalStyles'
import { CounterSection } from '@/components/CounterSection'
import { UsersSection } from '@/components/UsersSection'
import { FAKE_USERS } from '@/constants'

export const Home = (): JSX.Element => {
  const timer = useSelector(
    (state: RootState) => state.counter.timer,
    shallowEqual
  )
  console.log('timer: ', timer)
  // const { addArticle, removeArticle } = articleActions

  // const add = useCallback(
  //   (article: ArticleSchema) => dispatch(addArticle(article)),
  //   [addArticle, dispatch]
  // )

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <CounterSection />
        <UsersSection />
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
