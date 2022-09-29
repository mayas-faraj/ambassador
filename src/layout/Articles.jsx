import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import SettingContext from '../SettingContext';
import {ReactComponent as Seperator} from "../assets/imgs/seperator.svg";
import headerImage from '../assets/imgs/header-articles.png';
import Footer from "../components/Footer";
import '../assets/css/Articles.css';

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
			<header className="articles-header">
				<div className="articles-header__image-container">
					<Link to="/adad/#letture"><img className="articles-header__image" src={headerImage} alt="Claudio Pacifico in newspaper"/></Link>
					<Seperator className="articles-seperator section-seperator" />
					
				</div>
				<h1 className="articles-header__title">LETTURE</h1>
				<p className="articles-header__paragraph">
					episodi, ricordi e analisi<br/>
					scritti dall’Ambasciatore d’Italia<br/> 
					Claudio Pacifico
				</p>
			</header>
			<div className="articles-content">
				<div className="articles-container">
					<div className="articles">
					{
						articles.map(article=>(
							<div key={article.slug} className="articles-item">
								<Link to={"/adad/article/"+article.slug}>
									<img className="articles-item__image" src={context.uploadsUrl+"/"+article.image} alt={article.excerpt}/>
								</Link>
								<strong className="articles-item__type">{article.type}</strong>
								<Link to={"/adad/article/"+article.slug}>
									<p className="articles-item__name">{article.title + "\n..."}</p>
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

