import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import SettingContext from 'components/SettingContext';
import {ReactComponent as Seperator} from "/public/assets/imgs/seperator.svg";
import headerImage from 'assets/imgs/header-articles.png';
import Footer from "/components/Footer";
import style from '/style/Articles.module.scss';

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
			<header className={style["articles-header"]}>
				<div className={style["articles-header__image-container"]}>
					<Link href="/adad/#letture"><img className={style["articles-header__image"]} src={headerImage} alt="Claudio Pacifico in newspaper"/></Link>
					<Seperator className="articles-seperator section-seperator" />
					
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
								<Link href={"/adad/article/"+article.slug}>
									<img className={style["articles-item__image"]} src={context.uploadsUrl+"/"+article.image} alt={article.excerpt}/>
								</Link>
								<strong className={style["articles-item__type"]}>{article.type}</strong>
								<Link href={"/adad/article/"+article.slug}>
									<p className={style["articles-item__name"]}>{article.title + "\n..."}</p>
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

