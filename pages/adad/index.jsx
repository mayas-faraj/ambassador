import React, {Fragment} from "react";
import Link from 'next/link';
import Meetings from "/components/meetings";
import Blog from "/components/blog";
import Publications from "/components/publications";
import Map from "/components/map";
import Events from "/components/events";
import Contact from "/components/contact";
import Travel from "/components/travel";
import Footer from "/components/footer";
import Seperator from "/public/assets/imgs/home-seperator.svg";
//import Menu from "./assets/imgs/menu.svg";
import style from '/style/Home.module.scss';
import ambassadorImg from '/public/assets/imgs/ambassador.png';

export default function Home(props) {
	const [stickyHeader, setStickyHeader]=React.useState(false);
	const [activeCategoryIndex, setActiveCategoryIndex]=React.useState(0);
	const [stickyMenuVisible, setStickyMenuVisible]=React.useState(false);

	const libraryRef=React.useRef();
	const lettureRef=React.useRef();
	const biografiaRef=React.useRef();
	const diplomacyRef=React.useRef();
	const travelRef=React.useRef();

	const MENU=[
		{"title": "Biografia", "link": "/adad/about-it"},
		{"title": "Onorificenze", "link": "/adad/honor"},
		{"title": "Libri", "link": "#library", clickHandler: ()=>setActiveCategoryIndex(0)},
		{"title": "Saggi e articoli", "link": "#library", clickHandler: ()=>setActiveCategoryIndex(1)},
		{"title": "Blog", "link": "#blog"},
		{"title": "Mappa", "link": "#map"},
		{"title": "Letture", "link": "adad/articles"},
		{"title": "Repertorio diplomatico", "link": "/adad/diplomacy-report"},
		{"title": "Viaggi e Spedizioni", "link": "adad/travel"},
		{"title": "Contatti", "link": "adad/contact"},
	];

	const SECTIONS=[
		{"id": "meetings", "element": <Meetings />},
		{"id": "blog", "element": <Blog />},
		{"id": "library", "element": <Publications setRef={libraryRef} activeCategoryIndex={activeCategoryIndex}/>},
		{"id": "map", "element": <Map />},
		{"id": "events", "element": <Events />},
		{"id": "contact", "element": <Contact />},
		{"id": "viaggi", "element": <Travel />},
		{"id": "biografia", "element": <Biografia />},
		{"id": "letture", "element": <Letture />},
		{"id": "diplomacy", "element": <Diplomacy />},
		{"id": "travel", "element": <TravelSection />}
	];

	/*
	const setSticky=()=> {
		if(window.scrollY>=350)
			setStickyHeader(true);
		else
			setStickyHeader(false);
	}
	React.useEffect(()=>{
		window.addEventListener("scroll", setSticky);
		return ()=>{
			window.removeEventListener("scroll", setSticky);
		};
	}, []);
	*/

	React.useEffect(()=>{
		/*
		if(window.location.hash==="#library") libraryRef.current.scrollIntoView();
		if(window.location.hash==="#letture") lettureRef.current.scrollIntoView();
		if(window.location.hash==="#biografia") biografiaRef.current.scrollIntoView();
		if(window.location.hash==="#diplomacy") diplomacyRef.current.scrollIntoView();
		if(window.location.hash==="#travel") travelRef.current.scrollIntoView();
		if(window.location.hash==="#saggi") {
			libraryRef.current.scrollIntoView();
			setActiveCategoryIndex(1);
		}
		*/
	}, []);


	return (
		<Fragment>
			{/*
			<div className={"top-header__overlay"+(stickyHeader?" top-header__overlay--visible":"")}></div>
			<div className={"top-header"+(stickyHeader?" top-header--visible":"")}>
				<Menu className={style["top-header__menu"]} onClick={()=>setStickyMenuVisible(!stickyMenuVisible)}/>
				<h1 className={style["top-header__title"]}>Ambasciatore d&apos;Italia<br/>Claudio Pacifico</h1>
			</div>
			*/}
			<header>
				<div className={style["header-wrapper"]}>
					<div className={"header-menu"+(stickyHeader?" header-menu--sticky":"")+(stickyMenuVisible?" header-menu--visible":"")}>
						<nav><ul className={style["header-menu__list"]}>
						{MENU.map(item=>
							<li key={item.title} className={style["header-menu__item"]}>
							{item.link.startsWith("#") && <a className={style["header-menu__link"]} href={item.link} onClick={item.clickHandler}>{item.title}</a>}
							{item.link.startsWith("#") || <Link className={style["header-menu__link"]} href={item.link}>{item.title}</Link>}
							</li>)}
						</ul></nav>
					</div>
				</div>
				<div className={style["header"]}>
					<img className={style["header__img"]} alt="claudio pacifico" src={ambassadorImg.src}/>
					<h1 className={style["header__title"]}>Ambasciatore d&apos;Italia<span className="header__subtitle">Claudio Pacifico</span></h1>
				</div>
			</header>
			{
				SECTIONS.map((section, index)=>(
					<Fragment key={section.id}>
						<div id={section.id}><div className={section.id+"__container"}>{section.element}</div></div>
						{((true || index<3) && index<SECTIONS.length-1) && <a href={"#"+SECTIONS[index+1].id}><Seperator className={section.id+"-seperator section-seperator"} /></a>}
					</Fragment>
				))
			}
			<Footer/>
		</Fragment>
	);
}

function Biografia(props) {
	return (
		<div ref={props.biografiaRef}  className={style["about-navigator"]}>
			<Link className={style["navigator__link"]} href="/adad/about-it">biografia</Link>
		</div>
	);
}

function Letture(props) {
	return (
		<div ref={props.lettureRef}  className={style["article-navigator"]}>
			<Link className={style["navigator__link"]} href="/adad/articles">letture</Link>
		</div>
	);
}

function Diplomacy(props) {
	return (
		<div ref={props.diplomacyRef}  className={style["italy-navigator"]}>
			<Link className={style["navigator__link"]} href="/adad/diplomacy-report"><a>repertorio<br/>diplomatico</a></Link>
		</div>
	);
}

function TravelSection(props) {
	return (
		<div ref={props.travelRef}  className={style["desert-navigator"]}>
			<Link className={style["navigator__link"]} href="/adad/travel"><a>viaggi<br/>e spedizioni</a></Link>
		</div>
	);
}
