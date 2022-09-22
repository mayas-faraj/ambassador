import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';
import {ReactComponent as Seperator} from "../assets/imgs/seperator.svg";
import funeralImg from '../assets/imgs/claudio-pacifico-libya.jpg';
import armyClothsImg from '../assets/imgs/claudio-pacifico-army-cloths.jpg';
import inPastImg from '../assets/imgs/claudio-pacifico-in-past.jpg';
import  '../assets/css/About.css';

export default function About() {
	return (
		<Fragment>
			<header className="about-header">
				<div className="about-header__image-container">
					<Link to="/adad/#biografia"><img className="about-header__image" src={funeralImg} alt="Claudio Pacifico on libya"/></Link>
					<Seperator className="about-seperator section-seperator" />
				</div>
				<h1 className="about-header__title">Biografia</h1>
				<p className="about-header__text">
				Ambasciatore claudio pacifico.<br/>
				Diplomatico di carriea, scrittore, saggista, docente universitario.
				</p>
			</header>
			<div className="about-container">
				<nav className="about-header__nav">
					<ul>
						<li className="about-header-nav__item"><a href="#incarichi">Incarichi</a></li>
						<li className="about-header-nav__item"><a href="#dopo-il-2013">Dopo il 2013</a></li>
						<li className="about-header-nav__item"><a href="#onorificenze">Onorificenze</a></li>
						<li className="about-header-nav__item"><a href="#conoscenze-linguistiche">Conoscenze linguistiche</a></li>
						<li className="about-header-nav__item"><a href="#interessi-personali">Interessi personali</a></li>
					</ul>
				</nav>
				<div className="about-section">
					<div className="about-section__image-container">
						<img className="about-section__image" src={inPastImg}/>
					</div>
					<div className="about-section__text-container">
						<p className="about-section__text">
							Ha conseguito il Diploma di Maturità Classica al Liceo Ennio Quirino Visconti di Roma (1965). La Laurea in Giurisprudenza, con la massima votazione di ‘110 e lode’, all’Università “La Sapienza” di Roma (1971). Si è specializzato in discipline internazionali studiando alla Johns Hopkins University, University of Baltimore, Bologna Center (1971-1972) e al Winston Churchill College di Cambridge, University of Cambridge nel Regno Unito (1972).<br/>
							Ha frequentato i corsi per il Dottorato di Ricerca (PhD) in Giurisprudenza all’Università “La Sapienza” di Roma e il corso di preparazione alla carriera diplomatica (1973-1974).<br/>
Successivamente, ha seguito un summer course di specializzazione alla Harvard University di Cambridge, Boston, Massachusetts, negli Stati Uniti (1981).<br/><br/>
							Nel 1974 è entrato nella carriera diplomatica italiana dove ha servito sino al suo collocamento a riposo, il 1˚ gennaio 2013.<br/><br/>
							Nella sua lunga carriera, l’Ambasciatore Pacifico ha svolto il suo servizio in sedi di particolare rilevanza per gli interessi italiani (a cominciare dall’Ambasciata d’Italia a Washington) ed anche di "prima linea", in contesti di pericolo, talvolta veri e propri teatri di guerra, come l’Iran della Rivoluzione Iraniana; la Somalia della guerra tribale e civile; il Sudan, allora rifugio di Osama Bin Laden e obiettivo dei bombardamenti americani; la Libia del “Colonnello”, Moammar Gheddafi, o anche il Bangladesh dei cicloni e delle peggiori pandemie; ed infine l’Egitto della “Rivoluzione di Piazza Tahrir”, epicentro e simbolo delle cosiddette “Primavere Arabe”, dove è stato fortemente impegnato nella tutela dei nostri connazionali e degli importanti interessi delle società italiane sino alla fine della sua carriera.
						</p>
					</div>
				</div>
				<div className="about-section">
					<div className="about-section__image-container">
						<img className="about-section__image" src={armyClothsImg}/>
					</div>
					<div className="about-section__text-container">
						<p className="about-section__text">
							Da giovane, ha lavorato con alcuni dei grandi ambasciatori italiani del secondo ‘900,  Vittorio Cordero di Montezemolo, Luigi Vittorio Ferraris, Francesco Paolo Fulci, Rinaldo Petrignani, Luigi Cottafavi, Bruno Bottai, Boris Biancheri, Sergio Romano, Umberto La Rocca, Ferdinando Salleo, Luigi Guidobono Cavalchini, Umberto Vattani Giorgio Giacomelli, Patrizio Schmidlin, Amedeo De Franchis, Arduino Fornara, Sergio Kociancich. Durante tutto l’arco della sua carriera ha collaborato con tutti i grandi statisti italiani dei suoi tempi, dai Presidenti Bettino Craxi e Giulio Andreotti, a Sandro Pertini e Aldo Moro, Emilio Colombo, Oscar Luigi Scalfaro e Francesco Cossiga, sino ai ‘più giovani’, Lamberto Dini, Romano Prodi, Silvio Berlusconi, Carlo Azeglio Ciampi, Giorgio Napolitano, Massimo D’Alema.<br/>
Ha conosciuto da presso molti leaders internazionali come Mohammad Reza Pahlavi l’ultimo Shah d’Iran e l’Ayatollah Khomeini; grandi Presidenti americani, Jimmy Carter e Ronald Reagan, Bill Clinton e Barak Obama; grandi leader arabi Yasser Arafat, Re Hossein di Giordania, il Presidente Hafez al Assad di Siria, il “Colonnello”, Moammar Gheddafi, i Presidenti egiziani Hosni Mubarak, Mohammed Morsi e Abdel Fattah Al Sisi; il Presidente del Sudan Omar el Bashir e Hassan el Tourabi ; storici capi della Lega Araba, Amr Moussa, Nabil Elarabi, Ahmed Abul Gheit ; grandi capi africani, i Presidenti somali Mohamed Siad Barre, Ali Mahdi, Mohamed Farah Aidid, Hussein Farah Aidid, Abdiqasim Salad; Segretari Generali delle Nazioni Unite, Ban Ki-moon,  Boutros Boutros Ghali, Kofi Annan;  leader politici asiatici come Rajiv Gandhi,  Sonia Gandhi, Manmohan Singh, Narendra Modi,  il Presidente Abdul Kalam; l’Imperatore del Giappone Akhihito e i Primi Ministri Junichiro Koizumi e Shinzo Abe; i Presidenti cinesi Hu Jintao e Xi Jinping; il Re di Thailandia Bhumibol Abdulyadej; l’ultimo Re dell’Afghanistan Zaher Shah e il Presidente Hamid Karzai; i Presidenti del Pakistan Zia-ul-Haq, Pervez Musharraf e Benazir Bhutto; il Presidente del Bangladesh Shahabuddin Ahmed, Khaleda Zia e Sheik Hasina; la Presidente dello Sri Lanka Chandrika Bandaranaike; i Presidenti coreani Kim Dae Jong e Roh Moo-hyun;  Imelda Marcos.<br/><br/>
							La sua prima sede estera è stata l’Ambasciata italiana a Teheran, dove è arrivato l’8 marzo 1976. In qualità di Console d’Italia in Iran, ha organizzato l’evacuazione dei connazionali e altri cittadini europei durante la Rivoluzione Iraniana (1978-1979). Gli sono stati concessi due Encomi Solenni   per le operazioni di evacuazione.<br/><br/>
							Il 19 luglio 1979 è stato trasferito all’Ambasciata d’Italia a Washington dove è rimasto sino al giugno del 1983. <br/><br/>
							Il 17 giugno 1983 rientra a Roma alla sede centrale del Ministero degli Esteri Italiano. Prende servizio, prima come Vice Capo Ufficio per il Medio-Oriente, poi come Capo Ufficio per l’Asia nella Direzione per la Cooperazione allo Sviluppo. Dal giugno 1984 al febbraio del 1987 è Capo della Segreteria del Sottosegretario Bruno Corti con competenza per il Mediterraneo e il Medio-Oriente, Europa Orientale, Asia ed Oceania.<br/>
Il 14 febbraio del 1987 è inviato all’Ambasciata d’Italia a Mogadiscio come Primo Consigliere dell’Ambasciata, vale a dire Numero Due o Vice Ambasciatore. In tale veste, durante la guerra civile somala (1990-’91), guida un nucleo di Carabinieri del Battaglione Tuscania nelle operazioni di salvataggio delle popolazioni civili, dei connazionali e di numerosi civili di varie nazionalità. A riconoscimento di tali azioni, sono state concesse due medaglie d’oro e quattro d’argento al valor civile. Nella menzione d’onore si sottolinea che il nucleo dei Carabinieri “guidato dal Primo Consigliere dell’Ambasciata d’Italia a Mogadiscio Claudio Pacifico, ha compiuto, con senso di abnegazione e sprezzo del pericolo, atti di grande valore umanitario”. Per tale condotta, sarà poi nominato dall’Arma dei Carabinieri, ‘Socio Benemerito’ dell’Associazione Nazionale Carabinieri.<br/><br/>
							Sempre come riconoscimento per il servizio prestato in Somalia, nel 1991 è stato nominato, per la prima volta, Ambasciatore d’Italia a Dhaka, in Bangladesh, all’epoca il più giovane Ambasciatore sull’intera rete diplomatica italiana. Assume le sue funzioni il 23 agosto del 1991.<br/><br/>
							Il 2 maggio del 1995 rientra a Roma, alla Farnesina, come Direttore dell’Ufficio Medio-Oriente alla Direzione Generale Affari Politici.<br/><br/>
							Successivamente, in una serie di incarichi sempre più importanti, è stato:
							<br/><br/>
						</p>
						<p id="incarichi" className="about-section__text about-section__text--highlight">
							Ambasciatore d’Italia in Sudan<br/>
							(dal 25 novembre 1997 al 22 settembre 2000)
						</p>
						<p className="about-section__text about-section__text--highlight">
								Ambasciatore d’Italia in Libia<br/>
								(dal 23 settembre 2000 al 25 novembre 2004)
						</p>
						<p className="about-section__text about-section__text--highlight">
							Direttore Generale per l’Asia, l’Oceania e l’Antartide, al Ministero degli Esteri a Roma<br/>
							(dal 26 novembre 2004 al 31 agosto 2007)
						</p>
						<p className="about-section__text about-section__text--highlight">
							Ambasciatore d’Italia in Egitto<br/>
							(dal 1˚ settembre 2007 al 1˚ gennaio 2013)
						</p>
						<p className="about-section__text about-section__text--highlight">
							Rappresentante italiano presso la Lega Araba <br/>
							(è stato il primo Rappresentante formalmente accreditato dell’Italia<br/> e di tutti i Paesi UE, dal 1˚ settembre 2007)
						</p>
						<p className="about-section__text">
							<br/>
							Nel gennaio del 2008 è stato nominato al grado apicale della carriera diplomatica di Ambasciatore di grado, sempre a riconoscimento dell’eccezionalità del servizio prestato durante tutta la sua carriera.<br/><br/>
							Gli sono state concesse una serie di importanti onorificenze arabe: dall’Ordine dei Due Nili di Prima Classe (in Sudan), all’Ordine del Gran Fatah di Prima Classe (in Libia).<br/><br/>
							er quanto concerne le onorificenze italiane, è stato nominato Cavaliere Ufficiale, Commendatore, Grande Ufficiale e, infine, anche come riconoscimento sia alla sua particolare carriera sia all’impegno nella Rivoluzione egiziana, nel 2012 gli è stata conferita l’Onorificenza di Cavaliere di Gran Croce al Merito della Repubblica Italiana (la più alta onorificenza italiana), che il Presidente della Repubblica Giorgio Napolitano ha voluto consegnargli personalmente in un’apposita udienza al Quirinale.<br/>
							Subito dopo il suo collocamento a riposo, il Ministro degli Esteri gli ha assegnato nel gennaio del 2013 l’incarico di suo Consigliere e le funzioni di “Inviato Speciale per il Mediterraneo e il Medio-Oriente”.
						</p>
					</div>
				</div>
				<div id="dopo-il-2013" className="about-section">
					<div className="about-section__image-container">
					</div>
					<div className="about-section__text-container">
						<h2 className="about-section__title">Nel periodo compreso tra il 2013 e sino ad oggi</h2>
						<p className="about-section__text about-section__text--centric">
							<br/>
							Conserva per legge titolo e grado di Ambasciatore d’Italia.<br/>
							Ha assunto la Presidenza della Casa Editrice “LuoghInteriori”.<br/>
							È Membro del Circolo di Studi Diplomatici.<br/>
							È Membro dell’Associazione Nazionale Diplomatici-Costantino Nigra, Assdiplar.<br/>
							È Presidente dell’Istituto Euro-Mediterraneo e per i Paesi Arabi “Addar”. <br/>
							È Socio Benemerito dell’Associazione Nazionale Carabinieri.<br/>
							È Socio Benemerito della Fondazione “Amici della Fenice”. <br/>
							È Socio Onorario dell’Accademia Etrusca di Cortona. <br/>
							Fa parte degli “Amici della Letteratura Italiana”.<br/>
							È Membro dell’Associazione “Amici della Storia”.<br/><br/>
							Ha tenuto lezioni di master e specializzazione presso:<br/>
							Università degli Studi di Siena; <br/>
							Università “La Sapienza” di Roma;<br/>
							International Venice University di Venezia;<br/>
							Università Internazionale “Luiss Guido Carli”;<br/>
							Università Cattolica del Sacro Cuore di Milano; <br/>
							Università “Roma Tre” di Roma;<br/>
							Università per Stranieri di Perugia.<br/><br/>
						</p>
						<p className="about-section__text">
							Ha continuato ad interessarsi di progetti di promozione dell’Ambiente, in particolare per la protezione del delicato ecosistema del Sahara, dove ha promosso la costituzione di due parchi nazionali in Libia (l’“Acacus Mountains National Park” e il “Jebel al Uweynat National Park”) e di uno in Egitto (il “Gilf Kebir Plateau National Park”). <br/>
							In Egitto ha altresì sostenuto i progetti di sviluppo sostenibile nelle Oasi di Siwa, Kharga e Dhakla.<br/><br/>
							Ha continuato ad interessarsi di Archeologia e di Paletnologia, settore in cui aveva attivamente collaborato con il celebre paletnologo, ricercatore e docente universitario, Fabrizio Mori.<br/><br/>
							Sempre in Egitto, ha promosso la prima missione di ricerca e restauro nella famosa “Grotta dei Nuotatori” (scoperta da Lazlo von Almasy), nella cosidetta “Grotta Foggini” (scoperta da Massimo Foggini) e delle pitture rupestri di Wadi Sura.<br/><br/>
							Ha continuato ad interessarsi di Archeologia Industriale.<br/>
							È stato, con l’On. Bruno Corti, tra i soci fondatori del “Coltello di Delfo”, una delle prime riviste italiane di Cultura Materiale e di Archeologia Industriale (1987 - 1997).<br/><br/>
							Appassionato di musica classica ed operistica, segue le attività della Fondazione “Perugia Musica Classica” di Perugia; della Fondazione “Amici della Fenice” di Venezia; degli “Amici della Musica”; della Fondazione “Amici della Scala” di Milano; del “Bayreuther Festspiel Wagneriano” di Bayreuth
						</p>
					</div>
				</div>
				<div id="onorificenze" className="about-section">
					<div className="about-section__image-container">
					</div>
					<div className="about-section__text-container">
						<h2 className="about-section__title">ONORIFICENZE</h2>
						<p className="about-section__text about-section__text--highlight">
							Cavaliere di Gran Croce al Merito della Repubblica Italiana, d’Iniziativa del Presidente della Repubblica (la più alta onorificenza italiana concessagli per ‘gli eccezionali servizi resi al Paese’, che il Presidente della Repubblica Giorgio Napolitano ha voluto consegnargli personalmente in un’apposita udienza al Quirinale).<br/><br/>
							Grande Ufficiale al Merito della Repubblica Italiana.<br/><br/>
							Commendatore al Merito della Repubblica Italiana.<br/><br/>
							Cavaliere Ufficiale al Merito della Repubblica Italiana.<br/><br/>
							Ordine di Prima Classe dei Due Nili (Sudan).<br/><br/>
							Ordine di Prima Classe del Gran Fatah (Libia).<br/><br/>
							Menzione d’Onore nelle due Medaglie d’oro e quattro d’argento concesse ai Carabinieri e personale dell’Ambasciata nell’azione di salvataggio degli italiani e delle popolazioni civili durante la crisi somala (1990-1991).<br/><br/>
							Menzione d’Onore nella Targa Commemorativa posta nel Ministero degli Esteri a Pyongyang (per aver soccorso il personale e le famiglie dell’Ambasciata della Corea del Nord in Somalia e il Primo Consigliere, ucciso dai cecchini somali nel compound dell’Ambasciata d’Italia a Mogadiscio; gennaio 1991).<br/><br/>
							Encomio Solenne per il suo impegno come Ambasciatore d’Italia in Bangladesh (1994).<br/><br/>
							Due Encomi Solenni concessigli per le operazioni di evacuazione degli Italiani e altri cittadini europei durante la Rivoluzione Iraniana (1978-1979).
						</p>
					</div>
				</div>
				<div id="conoscenze-linguistiche" className="about-section">
					<div className="about-section__image-container">
					</div>
					<div className="about-section__text-container">
						<h2 className="about-section__title"><small>CONOSCENZE LINGUISTICHE</small></h2>
						<p className="about-section__text about-section__text--centric">
							Italiano: Madrelingua <br/>
							Inglese: Scritto e parlato correntemente (livello C1) <br/>
							Francese: Scritto e parlato correntemente (livello C1)<br/>
							Tedesco: Livello Base (livello A1)<br/>
							Spagnolo: Livello Base (livello A1) <br/>
							Arabo: Livello Base, solo parlato (livello A1)<br/>
							Turco, Farsi, Somalo: Solo cenni di lingua parlata<br/>
							Latino e Greco Antico: Conoscenza scolastica	<br/>
						</p>
					</div>
				</div>
				<div id="interessi-personali" className="about-section">
					<div className="about-section__image-container">
					</div>
					<div className="about-section__text-container">
						<h2 className="about-section__title"><small>INTERESSI PERSONALI</small></h2>
						<p className="about-section__text about-section__text--centric">
							Amante della Musica classica sinfonica, operistica, concertistica.<br/>
							Appassionato di Letteratura, Storia e Archeologia.<br/>
							L’Arte; la Pittura contemporanea; l’Arte primitiva. <br/>
							I Viaggi, in ogni parte del mondo: Europa, Asia, Africa, Australia e Oceania, Americhe, Antartide.<br/>
							Le Spedizioni in Land Rover, a cammello, mulo, cavallo, trekking.<br/>
							I Deserti: Sahara, il Deserto di Bayuda, il Deserto Libico-Nubiano, il Deserto di Nubia, il Western Desert, il Deserto Siro-Arabico, il Rub el Khali, il Dasht-e-Kavir, il Dasht-e-Lut, il Belucistan, il Sistan, il Takla Maklan, il Gobi in Mongolia, il Gran Deserto Vittoria, il deserto di Gibson in Australia. E i Deserti andini: Atacama e Sechura.<br/>
							Le Montagne: Alpi; Dolomiti; Elburz e Demavand; Pamir; Karakorum; Kashmir, Tien Shan ‘Celestial Mountains’, Tibet, Ladakh, Ayers Rock, Uluru, Colorado Plateau e Grand Canyon, Montagne Rocciose, Monti Uinta e Kings Peak, Wasatch Range e Monument Valley; Black Hills e Mount Rushmore, Appalachi, e Blue Ridge, Ande e Machu Picchu; Patagonia,<br/> Cerro Torre e Fitz Roy, Antartide. <br/>
							Le Catene montuose sahariane: Atlante, Tassili, Tibesti, Tadrart Acacus,<br/> Massicci Al Uweynat e Gilf Kebir.<br/><br/>

							<h2 className="about-section__title">Sport</h2>
							Sci, Sci alpino, Sci di fondo, Atletica Leggera, Tennis, Nuoto, Pallacanestro, Pallavolo, Calcio, Mountaineering and Trekking; Cavalcare a cammello.<br/>
							Negli anni ’60 ha fatto parte della Nazionale italiana Allievi di Atletica Leggera (100m; staffetta 4x100m; 400m; 800m; 1.200m e corsa campestre).<br/>
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}
