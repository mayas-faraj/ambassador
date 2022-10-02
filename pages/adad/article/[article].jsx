import React, {Fragment} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import axios from 'axios';
import Glimmer from '/components/glimmer';
import Seperator from "/public/assets/imgs/seperator.svg";
import Footer from '/components/footer';
import SettingContext from '/components/setting-context';
import style from '/style/Article.module.scss';


export default function Article() {
	const router=useRouter();
	const slug=router.query.article;
	const context=React.useContext(SettingContext);
	const [article, setArticle]=React.useState(null);
	const articleLoad=React.useEffect(()=>{
			slug && axios.post(context.backendApiUrl, {"operation": "read-article", "slug": slug})
			.then(result=>setArticle(result.data[0]))
			.catch(err=>console.log(err));
	}, [slug]);

	return (
		<Fragment>
		{article==null && <Glimmer/>}
		{article!==null && (
			<Fragment>
				<header className={style["article-header"]}>
					<Link href="/adad/articles" className={style["article-header__menu"]}>
						<a>
						Episodi, ricordi e analisi,<br/>
						scritti dall’Ambasciatore d’Italia<br/>
						Claudio Pacifico
						</a>
					</Link>
					<Seperator className={style["article-seperator"] + " section-seperator"} />
				</header>
				<div className={style["article-content"]}>
					<div className={style["article-container"]}>
						<img className={style["article__feature-image"]} src={context.uploadsUrl + "/" + article.image}/>
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

//mediumsubh 18px
