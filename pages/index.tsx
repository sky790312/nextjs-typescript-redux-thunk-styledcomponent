import Head from 'next/head'
// import { RootState } from '@/store/index'
// import { useSelector, shallowEqual, useDispatch } from 'react-redux'
// import { Article } from '@/components/Article'
// import { ArticleAddForm } from '@/components/ArticleAddForm'
// import { ArticleSchema } from '@/schema/articleSchema'
// import { Dispatch } from 'redux'
// import { articleActions } from '@/store/state.article'
// import { useCallback } from 'react'
import styled from 'styled-components/'
import { Container } from '@/GlobalStyles'
import { CounterSection } from '@/components/CounterSection'
import { UsersSection } from '@/components/UsersSection'

export const Home = (): JSX.Element => {
  // const dispatch: Dispatch = useDispatch()
  // const articles = useSelector((state: RootState) => {
  //   return state.articles.data
  // }, shallowEqual)
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

      {/* <ArticleAddForm add={add} />
      <ArticlesContainer>
        {articles.map((article: ArticleSchema) => (
          <Article
            key={article.id}
            article={article}
            removeArticle={removeArticle}
          />
        ))}
      </ArticlesContainer> */}
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
