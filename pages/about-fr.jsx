import React, {Fragment} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import LanguageSwitcher from '/components/language-switcher';
import Footer from '/components/footer';
import SettingContext from '/components/setting-context';
import Seperator from "/public/assets/imgs/seperator.svg";
import funeralImg from '/public/assets/imgs/claudio-pacifico-libya.jpg';
import siteUrls from '/public/siteUrls.json';
import style from '/style/about.module.scss';

export default function About() {
	const context=React.useContext(SettingContext);
	const [sections, setSections]=React.useState([]);
	React.useEffect(()=>{
		axios.post(context.backendApiUrl, {"operation": "read-about-fr-sections"})
		.then(result=>setSections(result.data))
		.catch(err=>console.error(err));

	}, []);

	return (
		<Fragment>
			<Head>
				<title>Claudio Pacifico | Biografia</title>
				<meta property="og:title" content="Claudio Pacifico - Biografia" />
				<meta name="description" content="ambasciatore Claudio Pacifico, diplomatico di carriera, scrittore, saggista, docente universitario"/>
				<meta property="og:description" content="Ambasciatore Claudio Pacifico, diplomatico di carriera, scrittore, saggista, docente universitario"/>
				<meta property="og:image" content={siteUrls.siteUrl + "/assets/imgs/claudio-pacifico-libya.jpg"} />
			</Head>
			<header className={style["about-header"]}>
				<div className={style["about-header__image-container"]}>
					<Link href="/#biografia"><a>
							<img className={style["about-header__image"]} src={funeralImg.src} alt="Claudio Pacifico on libya"/>
							<Seperator viewBox="0 0 331 34" className={style["about-seperator"]+" section-seperator"} />
					</a></Link>
				</div>
				<LanguageSwitcher pageLink="/about-it" downloadLink="/books/biographie-claudio-pacifico-fr.pdf"/>
				<h1 className={style["about-header__title"]}>Biografia</h1>
				<p className={style["about-header__text"]}>
				Ambasciatore claudio pacifico.<br/>
				Diplomatico di carriera, scrittore, saggista, docente universitario.
				</p>
			</header>
			<div className={style["about-container"]}>
				<nav className={style["about-header__nav"]}>
					<ul>
					{
						sections && sections.filter(section=>section.fragment_title!="").map(section=><li key={section.slug} className={style["about-header-nav__item"]}><a href={"#"+section.slug}>{section.fragment_title}</a></li>)
					}
					</ul>
				</nav>
				{
					sections && sections.map(section=>(
						<div key={section.slug} id={section.slug} className={style["about-section"]+" "+section.slug}>
							<div className={style["about-section__image-container"]}>
							{
								section.image_src && <img className={style["about-section__image"]} src={'/assets/imgs/'+section.image_src}/>
							}
							</div>
							<div className={style["about-section__text-container"]}>
								{section.title && <h2 className={style["about-section__title"]}>{section.title}</h2>}
								{section.sub_title && <h2 className={style["about-section__title"]}><small>{section.sub_title}</small></h2>}
								{section.content && <p className={style["about-section__text"]} dangerouslySetInnerHTML={{__html: section.content}}></p>}
							</div>
						</div>
					))
				}
			</div>
			<Footer />
		</Fragment>
	);
}
