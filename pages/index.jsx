import React, {Fragment} from "react";
import Seperator from "/public/assets/imgs/seperator.svg";
import style from '../style/Home.module.scss';
import ambassadorImg from '/public/assets/imgs/ambassador.png';

function Home(props) {
	return (
		<Fragment>
			<header>
				<div className={style["header"]}>
					<img className={style["header__img"]} alt="claudio pacifico" src={ambassadorImg.src}/>
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
