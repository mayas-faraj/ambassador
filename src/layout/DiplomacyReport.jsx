import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { Gallery, Item } from "react-photoswipe-gallery";
import Glimmer from "../components/Glimmer";
import { ReactComponent as Seperator } from "../assets/imgs/seperator.svg";
import Footer from "../components/Footer";
import "photoswipe/dist/photoswipe.css";
import "../assets/css/DiplomaticReport.css";
import countries from "../assets/data/countries.json";

export default function DiplomaticReport() {

	const [fixed, setFixed]=React.useState(false);
	React.useEffect(()=>{
		window.addEventListener("scroll", contentScrollHandler, {passive: true});
		return ()=>window.removeEventListener("scroll", contentScrollHandler);
	}, []);

	for(let i=0; i<countries.length; i++)
		if(countries[i].images!=null)
			for(let j=0; j<countries[i].images.length; j++) {
				countries[i].images[j].original=require("../assets/imgs/diplomacy-report/"+countries[i].imageDirectory+"/"+countries[i].images[j].name);
				countries[i].images[j].thumbnail=require("../assets/imgs/diplomacy-report/thumbnails/"+countries[i].imageDirectory+"/"+countries[i].images[j].name);
			}

	function contentScrollHandler() {
		setFixed(document.documentElement.scrollTop>=300);
	}

	return (
		<Fragment>
			<header className="diplomatic-report-header">
				<Link
					to="/adad/#diplomacy"
					className="diplomatic-report-header__menu"
				>
					L’Ambasciatore d’Italia Claudio Pacifico
				</Link>
				<Seperator className="diplomatic-report-seperator section-seperator" />
			</header>
			<div className="diplomatic-report-header__wrapper">
				<h1 className="diplomatic-report-header__title">
					Repertorio
					<br />
					Diplomatico
				</h1>
			</div>
			<div className={"diplomatic-report-countries" + (fixed?" fixed":"")}>
				<ul className="diplomatic-report-countries-list">
					{countries.map((country, index)=><li key={country.name} className="diplomatic-report-countries__item"><a href={index>0?"#country-"+country.name.toLowerCase():"#root"}>{"#"+country.name}</a></li>)}
				</ul>
			</div>
			<div className="diplomatic-report-content">
			{ countries.map(country=>(
				<Fragment key={country.name}>
					<div id={"country-"+country.name.toLowerCase()} className="diplomatic-report-container">
						<h2 className="report__title"><span className="report__pretitle">in </span>{country.name}</h2>
						<div className="report__year">{country.year}</div>
						<div className="report__subtitle">{country.subtitle}</div>
						<h3 className="report__header-text">{country.headerText}</h3>
						<p className="diplomatic-report__content">{country.text}</p>
						<p dangerouslySetInnerHTML={{__html: country.tailText}} className="report__tail-text"/>
					</div>
					<div className="diplomatic-report-gallery">
						<Gallery withCaption options={{"showHideAnimationType": "none"}}>
						{
							country.images!=null && country.images.map(image=>(
							<div key={country.name + image.name} className="diplomatic-report-item">
								<Item key={image.title}
									caption={image.title}
									original={image.original}
									thumbnail={image.original}
									width={"100vw"}
									height={"100vh"}
								>
								{
									({ref, open})=><img ref={ref} className="diplomatic-report-item__image" onClick={open} src={image.thumbnail}/> 
								}
								</Item>
								<strong className="diplomatic-report-item__title">{image.title}</strong>
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

