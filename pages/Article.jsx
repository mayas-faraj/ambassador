import React, {Fragment} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import Glimmer from '../components/Glimmer';
import {ReactComponent as Seperator} from "/public/assets/imgs/seperator.svg";
import Footer from '../components/Footer';
import SettingContext from '../components/SettingContext';
import style from '../style/Article.module.scss';


export default function Article() {
	let {slug}=useParams();

	const context=React.useContext(SettingContext);
	const [article, setArticle]=React.useState(null);
	const articleLoad=React.useEffect(()=>{
		axios.post(context.backendApiUrl, {"operation": "read-article", "slug": slug})
		.then(result=>setArticle(result.data[0]))
		.catch(err=>console.log(err));
	}, []);

	return (
		<Fragment>
		{article==null && <Glimmer/>}
		{article!==null && (
			<Fragment>
				<header className={style["article-header"]}>
					<Link to="/adad/articles" className={style["article-header__menu"]}>
						Episodi, ricordi e analisi,<br/>
						scritti dall’Ambasciatore d’Italia<br/>
						Claudio Pacifico
					</Link>
					<Seperator className="article-seperator section-seperator" />
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
