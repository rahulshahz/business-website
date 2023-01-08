import React from 'react'
import { Link } from 'react-router-dom'

import articleContent from './article-content'
const ArticlesList = () => {
    return (
        <div>
            <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
                ArticlesList
            </h1>
            <div className='container py-4 mx-auto'>
                <div className='flex flex-wrap -m-4'>
                    {articleContent.map((article,index) => (
                        <div key={index} className='p-4 md:w-1/2'>
                            <div className='h-full border-2 overflow-hidden'>
                                <Link to={`/article/${article.name}`}>
                                    <img className='lg:h-48 md:h-36 w-full object-cover object-center' src={article.thumbnail} alt='blog' />

                                </Link>
                                <div>
                                <Link to={`/article/${article.name}`}>
                                    <h3 className='text-lg font-medium text-gray-900 mb-3'>
                                        {article.title}
                                    </h3>
                                    <p>
                                        {article.content[0].substring(0,115)}...
                                    </p>
                                    
                                </Link>
                                <Link to={`/article/${article.name}`}>
                                    <p className='mt-3  text-blue-900'>Learn More</p>
                                </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ArticlesList