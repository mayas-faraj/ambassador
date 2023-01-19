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
import siteUrls from '/public/siteUrls.json';
import style from "/style/diplomaticreport.module.scss";

export default function DiplomaticReport({countries}) {

	const [fixed, setFixed]=React.useState(false);
	const [mounted, setMounted]=React.useState(false);
	const context=React.useContext(SettingContext);

	React.useEffect(()=>{
		window.addEventListener("scroll", contentScrollHandler, {passive: true});
		setMounted(true);
		return ()=>window.removeEventListener("scroll", contentScrollHandler);
	}, []);

	function contentScrollHandler() {
		setFixed(document.documentElement.scrollTop>=300);
	}

	return mounted && (
		<Fragment>
			<Head>
				<title>Claudio Pacifico | Repertorio Diplomatico</title>
				<meta property="og:title" content="Claudio Pacifico - Repertorio Diplomatico" />
				<meta property="og:image" content={siteUrls.siteUrl + "/assets/imgs/claudio-pacifico-with-afarat.jpg"} />
				<meta property="og:description" content="Ambasciatore Claudio Pacifico, diplomatico di carriea, scrittore, saggista, docente universitario"/>
			</Head>
			<header className={style["diplomatic-report-header"]}>
				<Link
					href="/#diplomacy"
				>
					<a className={style["diplomatic-report-header__menu"]}>
					L’Ambasciatore d’Italia Claudio Pacifico
					</a>
				</Link>
				<Link href="/#diplomacy">
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
						<div dangerouslySetInnerHTML={{__html: country.footer_text}} className={style["report__tail-text"]}/>
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

export async function getStaticProps(context) {
	const siteUrls=require("/public/siteUrls"); 
	const sectionData=await fetch(siteUrls.backendApiUrl, {
		"method": "post", "headers": {
			"Content-Type": "application/json"
		}, 
		"body": JSON.stringify({"operation": "read-diplomacy-report-section"})
	});
	const sections=await sectionData.json();

	return {
		"props": {
			"countries": sections 
		}
	};
}

