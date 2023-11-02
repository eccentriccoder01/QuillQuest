import React, { Fragment } from 'react'
import ArticleContent from "./Article-content"
import ArticlesR from '../Components/ArticlesR'

const Articles = () => {
  return (
    <Fragment>
    <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
      Articles
    </h1>
    <div className='container py-4 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          <ArticlesR articlesR={ArticleContent}/>
      </div>
    </div>
    </Fragment>
  )
}

export default Articles
