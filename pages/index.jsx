import React, {Fragment} from "react";
import Head from "next/head";
import Footer from "/components/footer";
import Seperator from "/public/assets/imgs/seperator.svg";
import style from '../style/cover.module.scss';
import ambassadorImg from '/public/assets/imgs/ambassador.png';

function Home(props) {
	return (
		<Fragment>
			<Head>
				<meta name="description" content="ambasciatore d'italia, Claudio Pacifico, il diplomatico, lo scrittore, il saggista"/>
				<meta property="og:title" content="Claudio Pacifico - Ambasciatore d'Italia" />
				<meta property="og:image" content="/assets/imgs/claudio-pacifico.png" />
				<meta property="og:description" content="ambasciatore d'italia, Claudio Pacifico, il diplomatico, lo scrittore, il saggista"/>
			</Head>
			<header>
				<div className={style["header"]}>
					<img className={style["header__img"]} alt="claudio pacifico" src={ambassadorImg.src}/>
					<h1 className={style["header__title"]}>Ambasciatore d&apos;Italia<span className={style["header__subtitle"]}>Claudio Pacifico</span></h1>
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
			<Footer/>
		</Fragment>
	);
}

export default Home;
