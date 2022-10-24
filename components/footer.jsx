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
							<img src="/assets/imgs/footer/la-fenice.png" alt="la-fenice logo"/>
						</a>
					</div>
					<div className={style["footer-icons__item"]}>
						<a target="_blank" href="#" className={style["footer-icons__link"]}>
							<img src="/assets/imgs/footer/associazione.png" alt="associazione logo"/>
						</a>
					</div>
					<div className={style["footer-icons__item"]}>
						<a target="_blank" href="#" className={style["footer-icons__link"]}>
							<img src="/assets/imgs/footer/associazione-nazionale.png" alt="associazione nazionale logo"/>
						</a>
					</div>
					<div className={style["footer-icons__item"]}>
						<a target="_blank" href="#" className={style["footer-icons__link"]}>
							<img src="/assets/imgs/footer/assdiplar.png" alt="assdiplar logo"/>
						</a>
					</div>
					<div className={style["footer-icons__item"]}>
						<a target="_blank" href="#" className={style["footer-icons__link"]}>
							<img src="/assets/imgs/footer/studi-diplomatici.png" alt="studi-diplomatici logo"/>
						</a>
					</div>
					<div className={style["footer-icons__item"]}>
						<a target="_blank" href="#" className={style["footer-icons__link"]}>
							<img src="/assets/imgs/footer/repubblica.png" alt="republica logo"/>
						</a>
					</div>
				</div>
				<div className={style["footer-container"]}>
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
								<img src="/assets/imgs/footer/ministries.png" alt="ministero degil Affari Esteri logo"/>
							</a>
						</div>
						<div className={style["footer-icons__item"]}>
							<a href="#" className={style["footer-icons__link"]}>
								<img src="/assets/imgs/footer/ambasciata-d-italia-dhaka.png" alt="Ambasciata d'italia Dhaka logo"/>
							</a>
						</div>
						<div className={style["footer-icons__item"]}>
							<a href="#" className={style["footer-icons__link"]}>
								<img src="/assets/imgs/footer/addar-trasparente.png" alt="Addar-Transparente logo"/>
							</a>
						</div>
						<div className={style["footer-icons__item"]}>
							<a href="#" className={style["footer-icons__link"]}>
								<img src="/assets/imgs/footer/accademia-etrusca.png" alt="Accademia-estrusca logo"/>
							</a>
						</div>
						<div className={style["footer-icons__item"]}>
							<a target="_blank" href="https://ambilcairo.esteri.it/ambasciata_ilcairo/it/ambasciata/news/dall-ambasciata/2010/06/l-ambasciatore-d-italia-al-cairo-s-e-claudio-pacifico-incontra-il-segretario-generale-della-lega-ar.html" className={style["footer-icons__link"]}>
								<img src="/assets/imgs/footer/ambasciata-d-italia-cairo.jpg" alt="ambasciata d'italia cairo logo"/>
							</a>
						</div>
						<div className={style["footer-icons__item"]}>
							<a target="_blank" href="https://ambmogadiscio.esteri.it/ambasciata_mogadiscio/it" className={style["footer-icons__link"]}>
								<img src="/assets/imgs/footer/ambasciata-d-italia-mogadiscio.jpg" alt="ambasciata d'italia mogadiscio logo"/>
							</a>
						</div>
						<div className={style["footer-icons__item"]}>
							<a target="_blank" href="https://ambtripoli.esteri.it/ambasciata_tripoli/it" className={style["footer-icons__link"]}>
								<img src="/assets/imgs/footer/ambasciata-d-italia-tripoli.jpg" alt="ambasciata d'italia tripoli logo"/>
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
