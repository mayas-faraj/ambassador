import style from '/style/footer.module.scss';

export default function Footer() {
	return (
		<footer className={style["footer"]}>
			<a href="#__next" className={style["footer__button-top"]}>^</a>
			<div className={style["footer-copyright"]}>
				<p>
				Claudio Pacifico Website | Italy &copy;2022
				</p>
			</div>
		</footer>
	);
}
