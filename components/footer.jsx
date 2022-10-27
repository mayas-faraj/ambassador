import Link from "next/link";
import style from "/style/footer.module.scss";

export default function Footer() {
	return (
		<footer id="footer" className={style["footer"]}>
			<a className={style["footer__button-top"]} href="#__next">^</a>
			<div className={style["footer-top"]}>
				<div className={style["footer-top__title"]}>fonti e SIti collegati</div>
				<div className={style["footer-icons"]+" "+style["footer-icons--first-row"]}>
					<div className={style["footer-icons__item"]}>
						<a target="_blank" href="#" className={style["footer-icons__link"]}>
							<img src="/assets/imgs/footer/gran-teatro.png" alt="gran teatro logo"/>
							<div className={style["footer-icons__title"]}>Gran teatro<br/>la fenice</div>
						</a>
					</div>
					<div className={style["footer-icons__item"]}>
						<a target="_blank" href="#" className={style["footer-icons__link"]}>
							<img src="/assets/imgs/footer/associazione-nazionale.png" alt="associazione nazionale logo"/>
							<div className={style["footer-icons__title"]}>Associazione Nazionale<br/>Carabinieri</div>
						</a>
					</div>
					<div className={style["footer-icons__item"]}>
						<a target="_blank" href="#" className={style["footer-icons__link"]}>
							<img src="/assets/imgs/footer/presidenza-della.png" alt="presidenza della logo"/>
							<div className={style["footer-icons__title"]}>Presidenza della <br/>repubblica Italiana</div>
						</a>
					</div>
					<div className={style["footer-icons__item"]}>
						<a target="_blank" href="#" className={style["footer-icons__link"]}>
							<img src="/assets/imgs/footer/assocazione-nazionale-diplomatici.png" alt="assocazione nazionale diplomatici logo"/>
							<div className={style["footer-icons__title"]}>Assocazione<br/>Nazionale Diplomatici<br/>ar.- constantino nigra</div>
						</a>
					</div>
					<div className={style["footer-icons__item"]}>
						<a target="_blank" href="#" className={style["footer-icons__link"]}>
							<img src="/assets/imgs/footer/l-accademia-etrusca.png" alt="l-accademia etrusca logo"/>
							<div className={style["footer-icons__title"]}>L’ACCADEMIA <br/>ETRUSCA DI CORTONA</div>
						</a>
					</div>
					<div className={style["footer-icons__item"]}>
						<a target="_blank" href="#" className={style["footer-icons__link"]}>
							<img src="/assets/imgs/footer/istituto-euro-mediterraneo.png" alt="istituto euro mediterraneo logo"/>
							<div className={style["footer-icons__title"]}>Istituto <br/>Euro-mediterraneo<br/>e Per i paesi arabi</div>
						</a>
					</div>
				</div>
				<div className={style["footer-icons"]+" "+style["footer-icons--second-row"]}>
					<div className={style["footer-icons__item"]}>
						<a target="_blank" href="#" className={style["footer-icons__link"]}>
							<img src="/assets/imgs/footer/ambasciata-tripoli.png" alt="ambasciata tripoli logo"/>
						</a>
					</div>
					<div className={style["footer-icons__item"]}>
						<a target="_blank" href="#" className={style["footer-icons__link"]}>
							<img src="/assets/imgs/footer/ambasciata-cairo.png" alt="ambasciata cairo logo"/>
						</a>
					</div>
					<div className={style["footer-icons__item"]}>
						<a target="_blank" href="#" className={style["footer-icons__link"]}>
							<img src="/assets/imgs/footer/ambasciata-teheran.png" alt="ambasciata teheran logo"/>
						</a>
					</div>
					<div className={style["footer-icons__item"]}>
						<a target="_blank" href="#" className={style["footer-icons__link"]}>
							<img src="/assets/imgs/footer/ambasciata-khartoum.png" alt="ambasciata khartoum logo"/>
						</a>
					</div>
					<div className={style["footer-icons__item"]}>
						<a target="_blank" href="#" className={style["footer-icons__link"]}>
							<img src="/assets/imgs/footer/ambasciata-dhaka.png" alt="ambasciata dhaka logo"/>
						</a>
					</div>
					<div className={style["footer-icons__item"]}>
						<a target="_blank" href="#" className={style["footer-icons__link"]}>
							<img src="/assets/imgs/footer/ambasciata-khartoum2.png" alt="ambasciata khartoum logo"/>
						</a>
					</div>
				</div>
				<div className={style["footer-container"]}>
					<div className={style["footer-icons"]+" "+style["footer-icons--third-row"]}>
						<div className={style["footer-icons__item"]}>
							<a href="#" className={style["footer-icons__link"]}>
								<img src="/assets/imgs/footer/sapienza.png" alt="sapienze logo"/>
								<div className={style["footer-icons__title"]}>La sapienza<br/>università di roma</div>
							</a>
						</div>
						<div className={style["footer-icons__item"]}>
							<a href="#" className={style["footer-icons__link"]}>
								<img src="/assets/imgs/footer/luiss.png" alt="luiss logo"/>
								<div className={style["footer-icons__title"]}>Luiss Università<br/>guido carli</div>
							</a>
						</div>
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
					<div className={style["footer-icons"]+" "+style["footer-icons--second-row"]}>
						<div className={style["footer-icons__item"]}>
							<a href="#" className={style["footer-icons__link"]}>
								<img src="/assets/imgs/footer/associazione-pergine.png" alt="associazione pergine logo"/>
								<div className={style["footer-icons__title"]}>Associazione <br/>Amici della storia</div>
							</a>
						</div>
						<div className={style["footer-icons__item"]}>
							<a href="#" className={style["footer-icons__link"]}>
								<img src="/assets/imgs/footer/studi-diplomatici.png" alt="studi diplomatici logo"/>
								<div className={style["footer-icons__title"]}>Circolo studi<br/>diplomatici</div>
							</a>
						</div>
					</div>
				</div>
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

