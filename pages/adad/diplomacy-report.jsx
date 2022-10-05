import React, { Fragment } from "react";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import Glimmer from "/components/Glimmer";
import Seperator from "/public/assets/imgs/seperator.svg";
import Footer from "/components./footer";
import "photoswipe/dist/photoswipe.css";
import style from "/style/DiplomaticReport.module.scss";
import countries from "/public/assets/data/countries.json";

export default function DiplomaticReport() {

	const [fixed, setFixed]=React.useState(false);
	React.useEffect(()=>{
		window.addEventListener("scroll", contentScrollHandler, {passive: true});
		return ()=>window.removeEventListener("scroll", contentScrollHandler);
	}, []);

	for(let i=0; i<countries.length; i++)
		if(countries[i].images!=null)
			for(let j=0; j<countries[i].images.length; j++) {
				countries[i].images[j].original=require("/public/assets/imgs/diplomacy-report/"+countries[i].imageDirectory+"/"+countries[i].images[j].name);
				countries[i].images[j].thumbnail=require("/public/assets/imgs/diplomacy-report/thumbnails/"+countries[i].imageDirectory+"/"+countries[i].images[j].name);
			}

	function contentScrollHandler() {
		setFixed(document.documentElement.scrollTop>=300);
	}

	return (
		<Fragment>
			<header className={style["diplomatic-report-header"]}>
				<Link
					to="/adad/#diplomacy"
					className={style["diplomatic-report-header__menu"]}
				>
					L’Ambasciatore d’Italia Claudio Pacifico
				</Link>
				<Seperator className="diplomatic-report-seperator section-seperator" />
			</header>
			<div className={style["diplomatic-report-header__wrapper"]}>
				<h1 className={style["diplomatic-report-header__title"]}>
					Repertorio
					<br />
					Diplomatico
				</h1>
			</div>
			<div className={"diplomatic-report-countries" + (fixed?" fixed":"")}>
				<ul className={style["diplomatic-report-countries-list"]}>
					{countries.map((country, index)=><li key={country.name} className={style["diplomatic-report-countries__item"]}><a href={index>0?"#country-"+country.name.toLowerCase():"#root"}>{"#"+country.name}</a></li>)}
				</ul>
			</div>
			<div className={style["diplomatic-report-content"]}>
			{ countries.map(country=>(
				<Fragment key={country.name}>
					<div id={"country-"+country.name.toLowerCase()} className={style["diplomatic-report-container"]}>
						<h2 className={style["report__title"]}><span className="report__pretitle">in </span>{country.name}</h2>
						<div className={style["report__year"]}>{country.year}</div>
						<div className={style["report__subtitle"]}>{country.subtitle}</div>
						<h3 className={style["report__header-text"]}>{country.headerText}</h3>
						<p className={style["diplomatic-report__content"]}>{country.text}</p>
						<p dangerouslySetInnerHTML={{__html: country.tailText}} className={style["report__tail-text"]}/>
					</div>
					<div className={style["diplomatic-report-gallery"]}>
						<Gallery withCaption options={{"showHideAnimationType": "none"}}>
						{
							country.images!=null && country.images.map(image=>(
							<div key={country.name + image.name} className={style["diplomatic-report-item"]}>
								<Item key={image.title}
									caption={image.title}
									original={image.original}
									thumbnail={image.original}
									width={"100vw"}
									height={"100vh"}
								>
								{
									({ref, open})=><img ref={ref} className={style["diplomatic-report-item__image"]} onClick={open} src={image.thumbnail}/> 
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

