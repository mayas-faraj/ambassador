import Link from 'next/link';
import DownloadIcon from '/public/assets/imgs/download.svg';
import style from '/style/languageswitcher.module.scss';

export default function LanguageSwitcher(props) {
	const languages=[
		{"name": "it", "title": "Italiana"},
		{"name": "en", "title": "English"},
		{"name": "fr", "title": "française"}
	];

	return (
		<div className={style["switcher"]}>
		{  
			(props.pageLink && props.downloadLink) && languages.map(language=>(
				<div key={language.name} className={style["switcher-container"]}>
					<Link href={props.pageLink.replace("-it", "-"+language.name)}>
						<a className={style["switcher-container__link"]}>
							<img className={style["switcher-container__flag"]} src={`/assets/imgs/flag-${language.name}.gif`} alt={language.title+" flag"}/>
						</a>
					</Link>
					<a className={style["switcher-container__link"]} href={props.downloadLink.replace("-it", "-"+language.name)} download>
						<DownloadIcon />
					</a>

				</div>
			))
		}
		</div>
	);
}
