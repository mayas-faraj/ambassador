import React, { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import { Gallery, Item } from "react-photoswipe-gallery";
import SettingContext from "/components/setting-context";
import Glimmer from "/components/glimmer";
import Seperator from "/public/assets/imgs/seperator.svg";
import Footer from "/components/footer";
import "photoswipe/dist/photoswipe.css";
import style from "/style/diplomaticreport.module.scss";

export default function DiplomaticReport() {

	const [fixed, setFixed]=React.useState(false);
	const [countries, setCountries]=React.useState([]);

	const context=React.useContext(SettingContext);

	React.useEffect(()=>{
		window.addEventListener("scroll", contentScrollHandler, {passive: true});
		return ()=>window.removeEventListener("scroll", contentScrollHandler);
	}, []);

	React.useEffect(()=>{
		axios.post(context.backendApiUrl, {"operation": "read-diplomacy-report-section"})
		.then(result=>{
			setCountries(result.data);
			console.log(result.data);
		})
		.catch(err=>console.log("read-diplomacy-error", err));
	}, []);

	function contentScrollHandler() {
		setFixed(document.documentElement.scrollTop>=300);
	}

	return (
		<Fragment>
			<Head>
				<title>Claudio Pacifico | Repertorio Diplomatico</title>
				<meta property="og:title" content="Claudio Pacifico - Repertorio Diplomatico" />
				<meta property="og:image" content="/assets/imgs/claudio-pacifico-with-afarat.jpg" />
			</Head>
			<header className={style["diplomatic-report-header"]}>
				<Link
					href="/adad/#diplomacy"
					className={style["diplomatic-report-header__menu"]}
				>
					<a>
					L’Ambasciatore d’Italia Claudio Pacifico
					</a>
				</Link>
				<Link href="/adad/#diplomacy">
					<a><Seperator viewBox="0 0 331 34" className={style["diplomatic-report-seperator"]+" section-seperator"} /></a>
				</Link>
			</header>
			<div className={style["diplomatic-report-header__wrapper"]}>
				<h1 className={style["diplomatic-report-header__title"]}>
					Repertorio
					<br />
					Diplomatico
				</h1>
			</div>
			<div className={style["diplomatic-report-countries"] + " " + (fixed?style["fixed"]:"")}>
				<ul className={style["diplomatic-report-countries-list"]}>
					{countries.map((country, index)=><li key={country.slug} className={style["diplomatic-report-countries__item"]}><a href={index>0?"#"+country.slug:"#__next"}>{"#"+country.fragment_title}</a></li>)}
				</ul>
			</div>
			<div className={style["diplomatic-report-content"]}>
			{ countries.map(country=>(
				<Fragment key={country.slug}>
					<div id={country.slug} className={style["diplomatic-report-container"]}>
						<h2 className={style["report__title"]}><span className={style["report__pretitle"]}>in </span>{country.title}</h2>
						<div className={style["report__subtitle"]}>{country.sub_title}</div>
						<h3 className={style["report__header-text"]}>{country.header_text}</h3>
						<p className={style["diplomatic-report__content"]}>{country.content}</p>
						<p dangerouslySetInnerHTML={{__html: country.footer_text}} className={style["report__tail-text"]}/>
					</div>
					<div className={style["diplomatic-report-gallery"]}>
						<Gallery withCaption options={{"showHideAnimationType": "none"}}>
						{
							country.images!=null && country.images.map(image=>(
							<div key={image.image_src} className={style["diplomatic-report-item"]}>
								<Item
									caption={image.title}
									original={image.image_src}
									thumbnail={image.image_src}
									width={"100vw"}
									height={"100vh"}
								>
								{
									({ref, open})=><img ref={ref} className={style["diplomatic-report-item__image"]} onClick={open} src={image.image_src.replace("/"+country.title.toLowerCase(), "/thumbnails/"+country.title.toLowerCase())}/> 
								}
								</Item>
								<strong className={style["diplomatic-report-item__title"]}>{image.title}</strong>
							</div>
						))}
						</Gallery>
					</div>
				</Fragment>)
			)}
			</div>
			<Footer />
		</Fragment>
	);
}
