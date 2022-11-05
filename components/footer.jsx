import React from "react";
import Link from "next/link";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import style from "/style/footer.module.scss";

export default function Footer() {
	const icons=[
		{"image": "gran-teatro.png", "alt": "gran teatro logo", "title": "Gran teatro\nla fenice"},
		{"image": "associazione-nazionale.png", "alt": "associazione nazionale logo", "title": "Associazione Nazionale\nCarabinieri"},
		{"image": "presidenza-della.png", "alt": "presidenza della logo", "title": "Presidenza della \nrepubblica Italiana"},
		{"image": "assocazione-nazionale-diplomatici.png", "alt": "assocazione nazionale diplomatici logo", "title": "Assocazione\nNazionale Diplomatici\nar.- constantino nigra"},
		{"image": "l-accademia-etrusca.png", "alt": "l-accademia etrusca logo", "title": "L’ACCADEMIA \nETRUSCA DI CORTONA"},
		{"image": "istituto-euro-mediterraneo.png", "alt": "istituto euro mediterraneo logo", "title": "Istituto \nEuro-mediterraneo\ne Per i paesi arabi"},
		{"image": "ambasciata-tripoli.png", "alt": "ambasciata tripoli logo", "title": ""},
		{"image": "ambasciata-cairo.png", "alt": "ambasciata cairo logo", "title": ""},
		{"image": "ambasciata-teheran.png", "alt": "ambasciata teheran logo", "title": ""},
		{"image": "ambasciata-khartoum.png", "alt": "ambasciata khartoum logo", "title": ""},
		{"image": "ambasciata-dhaka.png", "alt": "ambasciata dhaka logo", "title": ""},
		{"image": "ambasciata-khartoum2.png", "alt": "ambasciata khartoum logo", "title": ""},
		{"image": "sapienza.png", "alt": "sapienze logo", "title": "La sapienza\nuniversità di roma"},
		{"image": "luiss.png", "alt": "luiss logo", "title": "Luiss Università\nguido carli"},
		{"image": "studi-diplomatici.png", "alt": "studi diplomatici logo", "title": "Circolo studi\ndiplomatici"},
		{"image": "associazione-pergine.png", "alt": "associazione pergine logo", "title": "Associazione \nAmici della storia"}
	];

	const [windowWidth, setWindowWidth]=React.useState(-1);

	React.useEffect(()=>{
		setWindowWidth(window.innerWidth);
	}, []);

	return (
		<footer id="footer" className={style["footer"]}>
			<a className={style["footer__button-top"]} href="#__next">^</a>
			<div className={style["footer-top"]}>
				<div className={style["footer-top__title"]}>fonti e SIti collegati</div>
				{ windowWidth>=600 && (
					<>
						<div className={style["footer-icons"]+" "+style["footer-icons--first-row"]}>
						{
							icons.filter((icon, index)=>index<6).map((icon, index)=>(
								<div key={icon.image} className={style["footer-icons__item"]}>
									<a target="_blank" href="#" className={style["footer-icons__link"]}>
										<img src={"/assets/imgs/footer/"+icon.image} alt={icon.alt}/>
										<div className={style["footer-icons__title"]}>{icon.title}</div>
									</a>
								</div>
							))
						}
						</div>
						<div className={style["footer-icons"]+" "+style["footer-icons--second-row"]}>
						{
							icons.filter((icon, index)=>index>=6 && index<12).map((icon, index)=>(
								<div key={icon.image} className={style["footer-icons__item"]}>
									<a target="_blank" href="#" className={style["footer-icons__link"]}>
										<img src={"/assets/imgs/footer/"+icon.image} alt={icon.alt}/>
										<div className={style["footer-icons__title"]}>{icon.title}</div>
									</a>
								</div>
							))
						}
						</div>
						<div className={style["footer-container"]+" "+style["footer-icons--third-row"]}>
							<div className={style["footer-icons"]}>
							{
								icons.filter((icon, index)=>index==12 || index==13).map((icon, index)=>(
									<div key={icon.image} className={style["footer-icons__item"]}>
										<a target="_blank" href="#" className={style["footer-icons__link"]}>
											<img src={"/assets/imgs/footer/"+icon.image} alt={icon.alt}/>
											<div className={style["footer-icons__title"]}>{icon.title}</div>
										</a>
									</div>
								))
							}
							</div>
							<div className={style["footer-contact"]}>
								<div className={style["footer-contact__title"]}>Contatti</div>
								<p className={style["footer-contact__content"]}>	
									<a href="mainto:Info@claudiopacificoambassador.com">Info@claudiopacificoambassador.com</a><br/>
									Sito <a href="tel:00393383733009">+39 3383733009</a><br/><br/>
									Indirizzo sede legale<br/>
									via Giuseppe Ferrari n. 2<br/>
									00195 Roma<br/>
									Tel. <a href="tel:063221102">063221102</a>-<a href="tel:063221192">063221192</a> fax <a href="tel:0632507421">0632507421</a>
								</p>
							</div>
							<div className={style["footer-icons"]}>
							{
								icons.filter((icon, index)=>index==14 || index==15).map((icon, index)=>(
									<div key={icon.image} className={style["footer-icons__item"]}>
										<a target="_blank" href="#" className={style["footer-icons__link"]}>
											<img src={"/assets/imgs/footer/"+icon.image} alt={icon.alt}/>
											<div className={style["footer-icons__title"]}>{icon.title}</div>
										</a>
									</div>
								))
							}
							</div>
						</div>
					</>)
				}
				{ (windowWidth>0 && windowWidth<600) && (
					<>
						<Swiper modules={[Navigation]} spaceBetween={0} loop={true} grabCursor={true} slidesPerView={2} navigation>
						{icons.map(icon=>(
							<SwiperSlide key={icon.image} className={style["footer-icons__slide"]}>
								<a target="_blank" href="#" className={style["footer-icons__link"]}>
									<img src={"/assets/imgs/footer/"+icon.image} alt={icon.alt}/>
									<div className={style["footer-icons__title"]}>{icon.title}</div>
								</a>
							</SwiperSlide>
						))
						}
						</Swiper>
						<div className={style["footer-contact"]}>
							<div className={style["footer-contact__title"]}>Contatti</div>
							<p className={style["footer-contact__content"]}>	
								<a href="mainto:Info@claudiopacificoambassador.com">Info@claudiopacificoambassador.com</a><br/>
								Sito <a href="tel:00393383733009">+39 3383733009</a><br/><br/>
								Indirizzo sede legale<br/>
								via Giuseppe Ferrari n. 2<br/>
								00195 Roma<br/>
								Tel. <a href="tel:063221102">063221102</a>-<a href="tel:063221192">063221192</a> fax <a href="tel:0632507421">0632507421</a>
							</p>
						</div>

					</>)
				}	
		 	</div>
			<div className={style["footer-bottom"]}>
				<p className={style["footer-bottom__copyright"]}>
					Sito ufficiale dell’Ambasciatore Claudio Pacifico<br/>
					tutti i diritti sono riservati ©2022
				</p>
			</div>
		</footer>
	);
}
