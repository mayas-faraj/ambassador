import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import './assets/css/PageNotFound.css';

export default function PageNotFound(props) {
	return (
		<Fragment>
			<header>
				<div className="header-wrapper">
					<h1 className="header__title">Under Construction</h1>
					<div className="header-menu">
						<div className="header-menu__list">
							<div className="header-menu__item">
								<Link to="/adad/" className="header-menu__link">Indietro</Link>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div className="under-construction">
				<p> Siamo spiacenti, questa pagina è in costruzione e sarà presto disponibile </p>
			</div>
			<footer className="footer">
				<div className="footer-copyright">
					<p>
					Claudio Pacifico Website | designed in Italy by <a href="https://www.linkedin.com/in/sam-mouazin-63248b13/" target="_blank" rel="noreferrer">Sam Mouazin</a><br/>and developed in Dubai by <a href="https://adad.net" target="_blank" rel="noreferrer">Loavi.net</a>
					</p>
				</div>
			</footer>
		</Fragment>
	);
}
