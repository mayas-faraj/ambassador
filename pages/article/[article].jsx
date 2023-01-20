import React, {Fragment} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {useRouter} from 'next/router';
import Glimmer from '/components/glimmer';
import Seperator from "/public/assets/imgs/seperator.svg";
import Footer from '/components/footer';
import SettingContext from '/components/setting-context';
import siteUrls from '/public/siteUrls.json';
import style from '/style/article.module.scss';


export default function Article(props) {
	const router=useRouter();
	const slug=router.query.article;
	const context=React.useContext(SettingContext);
	const article=props.article;

	return (
		<Fragment>
		{article==null && <Glimmer/>}
		{article!==null && (
			<Fragment>
				{article!=null && (
					<Head>
						<title>{article.title + " | Claudio Pacifico letture"}</title>
						<meta property="og:title" content={article.title + " | Claudio Pacifico letture"}/>
						<meta name="description" content={article.excerpt.replaceAll("\n", "")}/>
						<meta property="og:description" content={article.excerpt.replaceAll("\n", "")}/>
						{article.image && <meta property="og:image" content={context.imagesUrl+"/"+article.image} />}
					</Head>
				)}
				<header className={style["article-header"]}>
					<Link href="/article">
						<a className={style["article-header__menu"]}>
						Episodi, ricordi e analisi,<br/>
						scritti dall’Ambasciatore d’Italia<br/>
						Claudio Pacifico
						</a>
					</Link>
					<Link href="/article">
						<a><Seperator className={style["article-seperator"] + " section-seperator"} /></a>
					</Link>
				</header>
				<div className={style["article-content"]}>
					<div className={style["article-container"]}>
						<img className={style["article__feature-image"]} src={context.imagesUrl+ "/"   + article.image}/>
						<h1 className={style["article__type"]}>{article.type}</h1>
						<p className={style["article__excerpt"]}>{article.excerpt}</p>
						<p className={style["article__content"]}>{article.content}</p>
					</div>
				</div>
				<Footer/>
			</Fragment>
		)}
		</Fragment>
	);
}

export async function getStaticPaths() {
	const siteUrls=require("/public/siteUrls"); 
	const data=await fetch(siteUrls.backendApiUrl, {
		"method": "post", "headers": {
			"Content-Type": "application/json"
		}, 
		"body": JSON.stringify({"operation": "read-all-articles"})
	});
	const articles=await data.json();
	return {
		"fallback": "blocking",
		"paths": articles.map(article=>({"params": {"article": article.slug}}))
	};
}

export async function getStaticProps(context) {
	const siteUrls=require("/public/siteUrls"); 
	const articleData=await fetch(siteUrls.backendApiUrl, {
		"method": "post", "headers": {
			"Content-Type": "application/json"
		}, 
		"body": JSON.stringify({"operation": "read-article", "slug": context.params.article})
	});
	const article=await articleData.json();

	return {
		"props": {
			"article": article[0],
		}
	};
}
