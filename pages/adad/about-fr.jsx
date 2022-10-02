import React, {Fragment} from 'react';
import Link from 'next/link';
import axios from 'axios';
import LanguageSwitcher from 'components/LanguageSwitcher';
import Footer from 'components./footer';
import SettingContext from 'components/SettingContext';
import {ReactComponent as Seperator} from "/public/assets/imgs/seperator.svg";
import funeralImg from 'assets/imgs/claudio-pacifico-libya.jpg';
import style from '/style/About.module.scss';

export default function About() {
	const context=React.useContext(SettingContext);
	/*
	const [head1, setHead1]=React.useState("");
	const [head2, setHead2]=React.useState("");
	const [incarichi1, setIncarichi1]=React.useState("");
	const [incarichi2, setIncarichi2]=React.useState("");
	const [dopoil20131, setDopoil20131]=React.useState("");
	const [dopoil20132, setDopoil20132]=React.useState("");
	const [onorificenze, setOnorificenze]=React.useState("");
	const [conoscenzelinguistiche, setConoscenzelinguistiche]=React.useState("");
	const [interessipersonali, setInteressipersonali]=React.useState("");
	const [sport, setSport]=React.useState("");


	React.useEffect(()=>{
		axios.post(context.backendApiUrl, {"operation": "read-section", "slug": "boigraphia-head-1"}).then(result=>setHead1(result.data)).catch(err=>console.error(err));
		axios.post(context.backendApiUrl, {"operation": "read-section", "slug": "boigraphia-head-2"}).then(result=>setHead2(result.data)).catch(err=>console.error(err));
		axios.post(context.backendApiUrl, {"operation": "read-section", "slug": "boigraphia-incarichi-1"}).then(result=>setIncarichi1(result.data)).catch(err=>console.error(err));
		axios.post(context.backendApiUrl, {"operation": "read-section", "slug": "boigraphia-incarichi-2"}).then(result=>setIncarichi2(result.data)).catch(err=>console.error(err));
		axios.post(context.backendApiUrl, {"operation": "read-section", "slug": "boigraphia-dopo-il-2013-1"}).then(result=>setDopoil20131(result.data)).catch(err=>console.error(err));
		axios.post(context.backendApiUrl, {"operation": "read-section", "slug": "boigraphia-dopo-il-2013-2"}).then(result=>setDopoil20132(result.data)).catch(err=>console.error(err));
		axios.post(context.backendApiUrl, {"operation": "read-section", "slug": "boigraphia-onorificenze"}).then(result=>setOnorificenze(result.data)).catch(err=>console.error(err));
		axios.post(context.backendApiUrl, {"operation": "read-section", "slug": "boigraphia-conoscenze-linguistiche"}).then(result=>setConoscenzelinguistiche(result.data)).catch(err=>console.error(err));
		axios.post(context.backendApiUrl, {"operation": "read-section", "slug": "boigraphia-interessi-personali"}).then(result=>setInteressipersonali(result.data)).catch(err=>console.error(err));
		axios.post(context.backendApiUrl, {"operation": "read-section", "slug": "boigraphia-sport"}).then(result=>setsport(result.data)).catch(err=>console.error(err));
	}, []);
	*/

	const [sections, setSections]=React.useState([]);
	React.useEffect(()=>{
		axios.post(context.backendApiUrl, {"operation": "read-about-fr-sections"})
		.then(result=>setSections(result.data))
		.catch(err=>console.error(err));

	}, []);

	return (
		<Fragment>
			<header className={style["about-header"]}>
				<div className={style["about-header__image-container"]}>
					<Link href="/adad/#biografia"><img className={style["about-header__image"]} src={funeralImg} alt="Claudio Pacifico on libya"/></Link>
					<Seperator className="about-seperator section-seperator" />
				</div>
				<LanguageSwitcher pageLink="/adad/about-it" downloadLink="/books/about-it.pdf"/>
				<h1 className={style["about-header__title"]}>Biografia</h1>
				<p className={style["about-header__text"]}>
				Ambasciatore claudio pacifico.<br/>
				Diplomatico di carriea, scrittore, saggista, docente universitario.
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
						<div key={section.slug} id={section.slug} className={style["about-section"]}>
							<div className={style["about-section__image-container"]}>
							{
								section.image_src && <img className={style["about-section__image"]} src={'/imgs/'+section.image_src}/>
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
