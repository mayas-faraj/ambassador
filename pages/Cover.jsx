import React, {Fragment} from "react";
import Link from 'next/link';
import Meetings from "../components/Meetings";
import Blog from "../components/Blog";
import Publications from "../components/Publications";
import Map from "../components/Map";
import Events from "../components/Events";
import Contact from "../components/Contact";
import Travel from "../components/Travel";
import Footer from "../components/Footer";
import {ReactComponent as Seperator} from "/public/assets/imgs/seperator.svg";
//import {ReactComponent as Menu} from "./assets/imgs/menu.svg";
import style from '../style/Home.module.scss';
import ambassadorImg from '/public/assets/imgs/ambassador.png';

function Home(props) {
	return (
		<Fragment>
			<header>
				<div className={style["header"]}>
					<img className={style["header__img"]} alt="claudio pacifico" src={ambassadorImg}/>
					<h1 className={style["header__title"]}>Ambasciatore d&apos;Italia<span className="header__subtitle">Claudio Pacifico</span></h1>
					<p className={style["underconstructor"]}>THANK YOU FOR JOINING.<br/> THE NEW WEBSITE OF THE AMBASSADOR<br/> WILL BE&nbsp;
		<span className={style["glitch"]}>
			<span className={style["line"]}>ONLINE</span>
			<span className={style["line"]}>ONLINE</span>
			<span className={style["line"]}>ONLINE</span>
			<span className={style["line"]}>ONLINE</span>
			<span className={style["line"]}>ONLINE</span>
			<span className={style["line"]}>ONLINE</span>
			<span className={style["line"]}>ONLINE</span>
			<span className={style["line"]}>ONLINE</span>
			<span className={style["line"]}>ONLINE</span>
		</span> SOON.</p>
				</div>
			</header>
		</Fragment>
	);
}

export default Home;
