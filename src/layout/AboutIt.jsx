import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import SettingContext from '../SettingContext';
import {ReactComponent as Seperator} from "../assets/imgs/seperator.svg";
import funeralImg from '../assets/imgs/claudio-pacifico-libya.jpg';
import  '../assets/css/About.css';

export default function About() {
	const context=React.useContext(SettingContext);
	const [sections, setSections]=React.useState([]);
	React.useEffect(()=>{
		axios.post(context.backendApiUrl, {"operation": "read-about-it-sections"})
		.then(result=>setSections(result.data))
		.catch(err=>console.error(err));

	}, []);

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
					{
						sections && sections.filter(section=>section.fragment_title!="").map(section=><li key={section.slug} className="about-header-nav__item"><a href={"#"+section.slug}>{section.fragment_title}</a></li>)
					}
					</ul>
				</nav>
				{
					sections && sections.map(section=>(
						<div key={section.slug} id={section.slug} className="about-section">
							<div className="about-section__image-container">
							{
								section.image_src && <img className="about-section__image" src={'/imgs/'+section.image_src}/>
							}
							</div>
							<div className="about-section__text-container">
								{section.title && <h2 className="about-section__title">{section.title}</h2>}
								{section.sub_title && <h2 className="about-section__title"><small>{section.sub_title}</small></h2>}
								{section.content && <p className="about-section__text" dangerouslySetInnerHTML={{__html: section.content}}></p>}
							</div>
						</div>
					))
				}
			</div>
			<Footer />
		</Fragment>
	);
}
