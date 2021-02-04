import Head from 'next/head'
import { RootState } from '@/store/index'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { Article } from '@/components/Article'
import { ArticleAddForm } from '@/components/ArticleAddForm'
import { ArticleSchema } from '@/schema/articleSchema'
import { Dispatch } from 'redux'
import { articleActions } from '@/store/state.article'
import { useCallback } from 'react'
import styled from 'styled-components/'
import { FlexCenterContainer } from '@/GlobalStyles'

export const Home = (): JSX.Element => {
  const dispatch: Dispatch = useDispatch()
  const articles = useSelector((state: RootState) => {
    return state.articles.data
  }, shallowEqual)
  const { addArticle, removeArticle } = articleActions

  const add = useCallback(
    (article: ArticleSchema) => dispatch(addArticle(article)),
    [addArticle, dispatch]
  )

  return (
    <FlexCenterContainer>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ArticleAddForm add={add} />
      <ArticlesContainer>
        {articles.map((article: ArticleSchema) => (
          <Article
            key={article.id}
            article={article}
            removeArticle={removeArticle}
          />
        ))}
      </ArticlesContainer>
    </FlexCenterContainer>
  )
}

const ArticlesContainer = styled.div`
  padding: 40px;
`

export default Home
