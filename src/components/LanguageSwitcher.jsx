import {Link} from "react-router-dom";
import {ReactComponent as DownloadIcon} from '../assets/imgs/download.svg';
import '../assets/css/LanguageSwitcher.css';

export default function LanguageSwitcher(props) {
	const languages=[
		{"name": "it", "title": "Italiana"},
		{"name": "en", "title": "English"},
		{"name": "fr", "title": "française"}
	];

	for(let i=0; i<languages.length; i++)
		languages[i].flag=require("../assets/imgs/flag-"+languages[i].name+".gif");

	return (
		<div className="switcher">
		{  
			(props.pageLink && props.downloadLink) && languages.map(language=>(
				<div key={language.name} className="switcher-container">
					<Link className="switcher-container__link" to={props.pageLink.replace("-it", "-"+language.name)}>
						<img className="switcher-container__flag" src={language.flag} alt={language.title+" flag"}/>
					</Link>
					<a className="switcher-container__link" href={props.downloadLink.replace("-it", "-"+language.name)} download>
						<DownloadIcon />
					</a>

				</div>
			))
		}
		</div>
	);
}
