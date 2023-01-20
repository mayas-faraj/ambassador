import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import SettingContext from '/components/setting-context';
import Seperator from "/public/assets/imgs/seperator.svg";
import headerImage from '/public/assets/imgs/header-articles.png';
import Footer from "/components/footer";
import style from '/style/articles.module.scss';

export default function Articles() {
	const [articles, setArticles]=React.useState([]);
	const context=React.useContext(SettingContext);

	React.useEffect(()=>{
		axios.post(context.backendApiUrl, {"operation": "read-all-articles"})
		.then(result=>setArticles(result.data))
		.catch(err=>console.error(err));
	}, []);

	return (
		<React.Fragment>
			<Head>
				<title>Claudio Pacifico | Letture</title>
				<meta property="og:title" content="Claudio Pacifico - Letture" />
				<meta name="description" content="Episodi, ricordi e analisi,scritti dall’ambasciatore d’italia, claudio pacifico"/>
				<meta property="og:description" content="Episodi, ricordi e analisi,scritti dall’ambasciatore d’italia, claudio pacifico"/>
				<meta property="og:image" content={context.siteUrl + "/assets/imgs/header-articles.jpg"} />
			</Head>
			<header className={style["articles-header"]}>
				<div className={style["articles-header__image-container"]}>
					<Link href="/#letture"><a>
						<img className={style["articles-header__image"]} src={headerImage.src} alt="Claudio Pacifico in newspaper"/>
						<Seperator className={style["articles-seperator"]+" section-seperator"} />
					</a></Link>
				</div>
				<h1 className={style["articles-header__title"]}>LETTURE</h1>
				<p className={style["articles-header__paragraph"]}>
					episodi, ricordi e analisi<br/>
					scritti dall’Ambasciatore d’Italia<br/> 
					Claudio Pacifico
				</p>
			</header>
			<div className={style["articles-content"]}>
				<div className={style["articles-container"]}>
					<div className={style["articles"]}>
					{
						articles.map(article=>(
							<div key={article.slug} className={style["articles-item"]}>
								<Link href={"/article/"+article.slug}>
									<a><img className={style["articles-item__image"]} src={context.imagesUrl+"/"+article.image} alt={article.excerpt}/></a>
								</Link>
								<strong className={style["articles-item__type"]}>{article.type}</strong>
								<Link href={"/article/"+article.slug}>
									<a className={style["articles-item__name"]}>{article.title + "\n..."}</a>
								</Link>
							</div>
						))
					}
					</div>
				</div>
			</div>
			<Footer/>
		</React.Fragment>
	);
}

