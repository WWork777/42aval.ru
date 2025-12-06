'use client'
import './Blog.scss'
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';



export default function Blog(){

	const [articles, setArticles] = useState([]);


    useEffect(() => {
        fetch('/Blog/Articles.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setArticles(data.slice(0, 4));
            })
         
    }, [])

	return (
		<>
		<div className='blog' style={{minHeight:"100px"}}>
			<div className='blog-title'>
				<h2>Последние статьи</h2>
				<Link className="link-more" href='/blog'><span>Все статьи</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M13.47 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H6.5a.75.75 0 0 1 0-1.5h9.69z"/></svg>
				</Link>
			</div>
			<div className="blog-cards">
				{articles[0] && (
				<div id={articles[0].id} className="article-card">
						<Link style={{textDecoration: 'none'}} href={`/blog/${articles[0].url}`}>
							<Image src={`/Blog/${encodeURIComponent(articles[0].photo)}.webp`} alt={articles[0].title} width={500} height={500}/>
						</Link>
						{/* <Link style={{textDecoration: 'none'}} href={`/blog/${article.url}`}>
							<h4>{article.title}</h4>
						</Link> */}
						<Link className='card-list' style={{textDecoration: 'none'}} href={`/blog/${articles[0].url}`}>
							<span>{articles[0].date}</span>
							<p className='card-title'>{articles[0].title}</p>
							<p className='card-desc'>{articles[0].text}</p>
						</Link>

					</div>)}
					<div className='small-blog-container'>
						{articles.slice(1).map(article => (
							<div id={article.id} className="article-card-small" key={article.id}>
								<Link className='image-blog' style={{textDecoration: 'none'}} href={`/blog/${article.url}`}>
									<Image src={`/Blog/${encodeURIComponent(article.photo)}.webp`} alt={article.title} width={500} height={500}/>
								</Link>
								{/* <Link style={{textDecoration: 'none'}} href={`/blog/${article.url}`}>
									<h4>{article.title}</h4>
								</Link> */}
								<Link className='card-list' style={{textDecoration: 'none'}} href={`/blog/${article.url}`}>
									<span>{article.date}</span>
									<p className='card-title'>{article.title}</p>
									<p className='card-desc'>{article.text}</p>
								</Link>

							</div>
						))}
					</div>
			</div>
				<Link className="link-more-mob" href='/blog'><span>Все статьи</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M13.47 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H6.5a.75.75 0 0 1 0-1.5h9.69z"/></svg>
				</Link>
			
		</div>
		</>
	)
}