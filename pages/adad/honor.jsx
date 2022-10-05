import {Fragment} from 'react';
import Link from 'next/link';
import Footer from '../../components/footer';
import Seperator from "/public/assets/imgs/seperator.svg";
import funeralImg from '/public/assets/imgs/claudio-pacifico-libya.jpg';
import style from '/style/About.module.scss';

export default function Honor() {
	return (
		<Fragment>
			<header className={style["about-header"]}>
				<div className={style["about-header__image-container"]}>
					<Link href="/adad/"><img className={style["about-header__image"]} src={funeralImg} alt="Claudio Pacifico on libya"/></Link>
					<Seperator className="about-seperator section-seperator" />
				</div>
				<h1 className={style["about-header__title"]}>Onorificenze</h1>
			</header>
			<div className={style["about-container"]}>
				<div id="onorificenze" className={style["about-section"]}>
					<div className={style["about-section__text-container"]}>
						<p className="about-section__text about-section__text--centric about-section__text--large">
							<br/>Cavaliere di Gran Croce al Merito della Repubblica Italiana, d’Iniziativa del Presidente della Repubblica <br/>(la più alta onorificenza italiana concessagli per ‘gli eccezionali servizi resi al Paese’, che il Presidente della Repubblica Giorgio Napolitano ha voluto consegnargli personalmente in un’apposita udienza al Quirinale).<br/><br/>
							Grande Ufficiale al Merito della Repubblica Italiana.<br/><br/>
							Commendatore al Merito della Repubblica Italiana.<br/><br/>
							Cavaliere Ufficiale al Merito della Repubblica Italiana.<br/><br/>
							Ordine di Prima Classe dei Due Nili (Sudan).<br/><br/>
							Ordine di Prima Classe del Gran Fatah (Libia).<br/><br/>
							Menzione d’Onore nelle due Medaglie d’oro e quattro d’argento concesse ai <br/>Carabinieri e personale dell’Ambasciata nell’azione di salvataggio degli italiani e delle popolazioni civili durante la crisi somala (1990-1991).<br/><br/>
							Menzione d’Onore nella Targa Commemorativa posta nel Ministero degli Esteri a Pyongyang (per aver soccorso il personale e le famiglie dell’Ambasciata della Corea del Nord in Somalia e il Primo Consigliere, ucciso dai cecchini somali nel compound dell’Ambasciata d’Italia a Mogadiscio; gennaio 1991).<br/><br/>
							Encomio Solenne per il suo impegno come Ambasciatore d’Italia in Bangladesh (1994).<br/><br/>
							Due Encomi Solenni concessigli per le operazioni di evacuazione degli Italiani e altri cittadini europei durante la Rivoluzione Iraniana (1978-1979).
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}
