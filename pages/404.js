import {Fragment} from 'react';
import Link from 'next/link';
import style from '../style/404.module.scss';

export default function PageNotFound(props) {
	return (
		<Fragment>
			<header>
				<div className={style["header-wrapper"]}>
					<h1 className={style["header__title"]}>Under Construction</h1>
					<div className={style["header-menu"]}>
						<div className={style["header-menu__list"]}>
							<div className={style["header-menu__item"]}>
								<Link href="/" className={style["header-menu__link"]}>Indietro</Link>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div className={style["under-construction"]}>
				<p> Siamo spiacenti, questa pagina è in costruzione e sarà presto disponibile </p>
			</div>
		</Fragment>
	);
}
