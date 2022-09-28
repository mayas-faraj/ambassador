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
		</Fragment>
	);
}
