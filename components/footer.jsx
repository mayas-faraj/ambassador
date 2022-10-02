import style from '/style/Footer.module.scss';

export default function Footer() {
	return (
	<footer className={style["footer"]}>
		<div className={style["footer-copyright"]}>
			<p>
			Claudio Pacifico Website | Italy &copy;2022
			</p>
		</div>
	</footer>
	);
}
