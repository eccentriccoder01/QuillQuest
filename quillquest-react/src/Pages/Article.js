import React from 'react'
import { useParams } from 'react-router-dom'
import ArticleContent from './Article-content';
import ArticlesR from '../Components/ArticlesR';

const Article = () => {
  const {name} = useParams();
  const article = ArticleContent.find((article) => article.name === name);
  if(!article) return <h1>Article Not Found!</h1>
  const other = ArticleContent.filter(article=>article.name!==name)
  return (
    <>
    <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>{article.title}</h1>
    {article.content.map((paragraph, index)=>(
      <p className='mx-auto leading-relaxed text-base mb-4' key={index}>{paragraph}</p>
    ))}
    <h1 className="sm:text-2xl text-xl font-bold my-4 text-gray-900">Other Articles</h1>
    <div className='flex flex-wrap -m-4'>
    <ArticlesR articlesR={other}/>
    </div>
    </>
  );
};

export default Article
