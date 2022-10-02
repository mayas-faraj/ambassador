import React, {Fragment} from 'react';
import {Link, useParams} from 'react-router-dom';
import { Gallery, Item } from 'react-photoswipe-gallery'
import Glimmer from '../components/Glimmer';
import {ReactComponent as Seperator} from '../assets/imgs/seperator.svg';
import Footer from '../components/Footer';
import 'photoswipe/dist/photoswipe.css'
import style from '../style/Travel.module.scss';


export default function Travel() {
	const images=[
		{"title": "Ande Cavallo", "name": "AndeCavallo.jpg"},
		{"title": "Deserti Australiani AyersRock", "name": "DesertiAustralianiAyersRock.jpg"},
		{"title": "Deserti Sud Ovest Americano", "name": "DesertiSudOvestAmericano.jpg"},
		{"title": "Deserto Arabico", "name": "DesertoArabico.jpg"},
		{"title": "Deserto Bayuda", "name": "DesertoBayuda.jpg"},
		{"title": "Deserto Gobi Transmongolica", "name": "DesertoGobiTransmongolica.jpg"},
		{"title": "Deserto Sinai", "name": "DesertoSinai.jpg"},
		{"title": "El Alamein Depressione Qattara", "name": "ElAlameinDepressioneQattara.jpg"},
		{"title": "Gilf El Kebir Western Desert", "name": "GilfElKebirWesternDesert.jpg"},
		{"title": "Giungle Birmane Thailandesi", "name": "GiungleBirmaneThailandesi.jpg"},
		{"title": "Giungle Sunderband", "name": "GiungleSunderband.jpg"},
		{"title": "Guerra Civile Somala", "name": "GuerraCivileSomala.jpg"},
		{"title": "Karakorum Singkiang", "name": "KarakorumSingkiang.jpg"},
		{"title": "Karkur Talh Gebel Al Uweynat", "name": "KarkurTalhGebelAlUweynat.jpg"},
		{"title": "Kashmir", "name": "Kashmir.jpg"},
		{"title": "Ladakh Tibet", "name": "LadakhTibet.jpg"},
		{"title": "Lungo Fiume Mekong", "name": "LungoFiumeMekong.jpg"},
		{"title": "Masai Kilimangiaro", "name": "MasaiKilimangiaro.jpg"},
		{"title": "Mogadiscio Casa Somalia", "name": "MogadiscioCasaSomalia.jpg"},
		{"title": "Mogadiscio Dopo Distruzione Soldati Italiani", "name": "MogadiscioDopoDistruzioneSoldatiItaliani.jpg"},
		{"title": "Nilo Napata", "name": "NiloNapata.jpg"},
		{"title": "Nuba Mountains", "name": "NubaMountains.jpg"},
		{"title": "Oasi Siwa Tempio Zeus Amon", "name": "OasiSiwaTempioZeusAmon.jpg"},
		{"title": "Papua Nuova Guinea Sepik", "name": "PapuaNuovaGuineaSepik.jpg"},
		{"title": "Papua Sepik", "name": "PapuaSepik.jpg"},
		{"title": "Rivoluzione Iraniana", "name": "RivoluzioneIraniana.jpg"},
		{"title": "Rotorua Maori", "name": "RotoruaMaori.jpg"},
		{"title": "Sahara Acacus", "name": "SaharaAcacus.jpg"},
		{"title": "Sahara Carovane Sale", "name": "SaharaCarovaneSale.jpg"},
		{"title": "Sahara Deserto Libico", "name": "SaharaDesertoLibico.jpg"},
		{"title": "Sahara Gebel Al UweynatGebelArkanu", "name": "SaharaGebelAlUweynatGebelArkanu.jpg"},
		{"title": "Sahara Hoggar Assekrem", "name": "SaharaHoggarAssekrem.jpg"},
		{"title": "Sahara Murzuq", "name": "SaharaMurzuq.jpg"},
		{"title": "Sahara Rassili Erg Admer", "name": "SaharaRassiliErgAdmer.jpg"},
		{"title": "Sahara Timbuctu Azauad", "name": "SaharaTimbuctuAzauad.jpg"},
		{"title": "Sahara Ubari", "name": "SaharaUbari.jpg"},
		{"title": "Sahara Western Desert", "name": "SaharaWesternDesert.jpg"},
		{"title": "Savane", "name": "Savane.jpg"},
		{"title": "Savane Somale", "name": "SavaneSomale.jpg"},
		{"title": "Titicaca Uros", "name": "TiticacaUros.jpg"},
		{"title": "Uadi Mathendusc", "name": "UadiMathendusc.jpg"},
		{"title": "Yemen Hadramaut", "name": "YemenHadramaut.jpg"},
		{"title": "Yucatan Maya", "name": "YucatanMaya.jpg"}
	];

	for(let i=0; i<images.length; i++)
		images[i].src=require("../assets/imgs/viaggi/"+images[i].name);
	console.log(images);
	
	return (
		<Fragment>
			<header className={style["travel-header"]}>
				<Link to="/adad/#travel" className={style["travel-header__menu"]}>
				L’Ambasciatore d’Italia Claudio Pacifico
				</Link>
				<Seperator className="travel-seperator section-seperator" />
			</header>
			<h1 className={style["travel-header__title"]}>Viaggi e spedizioni</h1>
			<p className={style["travel-header__paragraph"]}>
			dell’Ambasciatore Claudio Pacifico<br/>
			in ogni parte del mondo: Europa, Asia, Africa, <br/>
			Australia e Oceania, Americhe, Antartide.
			</p>
			<div className={style["travel-content"]}>
				<div className={style["travel-container"]}>
					<p className={style["travel__content"]}>
					La sua passione per i viaggi e le esplorazioni lo ha indotto a organizzare durante, ormai circa quarant’anni, innumerevoli spedizioni dai deserti persiani a quelli australiani, dall’Hindu Kush al Karakorum, dal Gobi alla Papua Nuova Guinea, dagli altopiani del Tibet alle montagne Himalayane, dalle catene delle Ande alle giungle del Bengala o dello Yucatan, ma soprattutto nel Sahara.<br/>
					Ha pubblicato numerosi diari di viaggio, tra cui "Somalia, ricordi di un mal d'Africa italiano" e "Bengala". Sul Sahara, la sua più grande passione di viaggiatore, oltre a collaborare con varie pubblicazioni specializzate, tra cui in particolare "Sahara, itinerari e passioni", ha scritto numerosi articoli e prefazioni, vari libri e taccuini di viaggio, come Diario Sahariano e Con i Tuareg, a Timbuctù e Nel Sahara. II suo più importante libro “sahariano” è Sabbie Perdute, pubblicato dalla Edimond. L’ultimo dei suoi libri “sahariani” è Sahara, nel Regno della Fata Morgana, pubblicato sempre dalla Edimond nel 2007.<br/>
					Nel 2011 pubblica Dieci anni in Egitto, Libia e Sudan, dove i deserto è il grande protagonista.Si è anche impegnato nella salvaguardia ambientale e ha contribuito a numerose iniziative mirate a preservare il delicato equilibrio ambientale del Sahara, sostenendo la costituzione di parchi nazionali nell’Acacus e nel Gebel Al Uweynat (in Libia) e nel Gilf Kebir (in Egitto), oltreché progetti di sviluppo nelle oasi di Siwa, Kharga e Dakhla (Egitto). Ha promosso missioni di studio e restauro come quella a Wadi Sura, nel Gilf Kebir, sulle celebri Grotta dei Nuotatori e Grotta Foggini.<br/>
					</p>
				</div>
				<div className={style["travel-gallery"]}>
					<Gallery withCaption>
					{
						images.map(image=>(
							<div className={style["travel-item"]}>
								<Item key={image.title}
									caption={image.title}
									original={image.src}
									thumbnail={image.src}
									width={800}
									height={800}
								>
								{
									({ref, open})=><img ref={ref} className={style["travel-item__image"]} onClick={open} src={image.src}/> 
								}
								</Item>
								<strong className={style["travel-item__title"]}>{image.title}</strong>
							</div>
						))
					}
					</Gallery>
				</div>
				<p className="travel__content travel-list">
					<div className={style["travel-list__item"]}><div className="travel-list__number">1</div><div className="travel-list__desc">Le Ande a cavallo</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">2</div><div className="travel-list__desc">Deserto del Sinai - Monastero di Santa Chiara</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">3</div><div className="travel-list__desc">Giungle birmane e thai; tra i Meo</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">4</div><div className="travel-list__desc">Himalaya, Ladak e Tibet</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">5</div><div className="travel-list__desc">Mogadiscio…con i soldati italiani</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">6</div><div className="travel-list__desc">Mongolia: Transiberiana-Transmongolica, nel Deserto del Gobi</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">7</div><div className="travel-list__desc">Nei deserti australiani: Ayers Rock</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">8</div><div className="travel-list__desc">Nel Deserto del Bayuda</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">9</div><div className="travel-list__desc">Nuova Zelanda; Maori</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">10</div><div className="travel-list__desc">Papua Nuova Guinea; il fiume Sepik</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">11</div><div className="travel-list__desc">Sahara:  Deserto di Ubari</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">12</div><div className="travel-list__desc">Sahara, Western Desert. Il Gran Mare di sabbia</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">13</div><div className="travel-list__desc">Sahara. Gilf Kebir. Monumento a Kamal El Din</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">14</div><div className="travel-list__desc">Savane</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">15</div><div className="travel-list__desc">Somalia: savane somale</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">16</div><div className="travel-list__desc">Ande. Lago Titicaca e Indios Uros</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">17</div><div className="travel-list__desc">Yucatan e Maya</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">18</div><div className="travel-list__desc">Sahara. Gilf  Kebir: Almasy, <br/>“La Grotta dei Nuotatori”; “La Grotta Foggini”</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">19</div><div className="travel-list__desc">El Alamein e la Depressione di Al Qattara</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">20</div><div className="travel-list__desc">Kurkur Talh</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">21</div><div className="travel-list__desc">Masai e Kilimanjaro</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">22</div><div className="travel-list__desc">Mogadiscio: la mia casa prima della distruzione</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">23</div><div className="travel-list__desc">Napata</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">24</div><div className="travel-list__desc">Nei deserti del sud-ovest americano; civilità; pueblo</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">25</div><div className="travel-list__desc">Nel deserto Arabico</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">26</div><div className="travel-list__desc">Sahara: l’Oasi di Siwa</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">27</div><div className="travel-list__desc">Sahara: Gebel Al Uwueybat</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">28</div><div className="travel-list__desc">Sahara: Hoggan e Assekrem</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">29</div><div className="travel-list__desc">Sahara, Deserto Libico. Il Gran Mare di sabbia</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">30</div><div className="travel-list__desc">Sahara, Western Desert: Abu Ballas</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">31</div><div className="travel-list__desc">Sul Mekong</div></div>
					<div className={style["travel-list__item"]}><div className="travel-list__number">32</div><div className="travel-list__desc">Wadi Mathen Dush</div></div>
				</p>
			</div>
			<Footer/>
		</Fragment>
	);
}
