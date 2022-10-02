import React, {Fragment} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import {Helmet} from 'react-helmet';
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import Pagination from '../components/Pagination';
import Glimmer from '../components/Glimmer';
import Footer from '../components/Footer';
import SettingContext from '../components/SettingContext';
import transparentImage from '/public/assets/imgs/transparent.png';
import textImage from '/public/assets/imgs/text.png';
import {ReactComponent as Seperator} from "/public/assets/imgs/seperator.svg";
import {ReactComponent as ShareIcon} from '/public/assets/imgs/share.svg';
import {ReactComponent as FacebookButtonIcon} from '../assets/imgs/social-facebook.svg';
import {ReactComponent as TwitterButtonIcon} from '../assets/imgs/social-twitter.svg';
import {ReactComponent as LinkedinButtonIcon} from '../assets/imgs/social-linkedin.svg';
import style from '../style/Essay.module.scss';

export default props=>{
	const {slug}=useParams();
	const context=React.useContext(SettingContext);
	const [essays, setEssays]=React.useState(null);
	const [bookPagesCount, setBookPagesCount]=React.useState([]);
	const [bookModal, setBookModal]=React.useState(false);
	const [pageOffset, setPageOffset]=React.useState(0);

	const listRef=React.useRef();
	const itemRef=React.useRef();

	React.useEffect(()=>{
		axios.post(context.backendApiUrl, {"operation": "read-essays"}) 
		.then(result=>setEssays(result.data.reverse()))
		.catch(ex=>console.log(ex));

		if(listRef.current && itemRef.current) listRef.current.scrollTop=itemRef.current.offsetTop;

	}, []);

	const bookLoadEventHandler=({numPages}) => setBookPagesCount(numPages);
	if(essays)
		for(let i=0; i<essays.length; i++) {
			if(essays[i].slug && essays[i].slug===slug) {
				const currentEssay=essays.splice(i, 1);
				essays.unshift(currentEssay[0]);
			}
		}
	return (
		<Fragment>
			<header className={style["essay-header"]}>
				<Link to="/adad/#saggi" className={style["essay-header__menu"]}>
				Saggi di politica internazionale e Articoli
				</Link>
				<Seperator className="essay-seperator section-seperator" />
			</header>
			{ !essays && <Glimmer/> }
			<div className={style["essays"]}>
				<div className={style["essays__title"]}>
				L’Ambasciatore Pacifico è altresì impegnato<br/>
				in un’ampia attività di saggista, pubblicando articoli<br/>
				e saggi di politica internazionale, rilasciando<br/>
				lezioni di master ed interviste
				</div>
				<div className={style["essays-list"]}>
				{
					essays && essays.map(essay=>(
						<div key={essay.slug} className={style["essay-wrapper"]}>
							<div className={style["essay"]}>
							{
								essay.book_file && (
									<a className={style["essay-book__link"]} href={essay.book_file} target="_blank">
										<Document file={essay.book_file} onLoadSuccess={bookLoadEventHandler} loading="Caricamento della pagina in corso..." onClick2={()=>window.document.location.href=essay.book_file}>
											<Page width={3000} pageNumber={1} />
										</Document>
									</a>)
							}
							</div>
							<p className={style["essay-info"]}>
								<span className={style["essay-info__comment"]}>{essay.comment}</span><br/>
								{essay.title}.<br/>
								({essay.book_name?essay.book_name+". ":""}{essay.city?essay.city+", ":""}{(essay.month!=null && essay.month>=0) && [ "Gennaio", "febbraio", "Marzo", "aprile", "Maggio", "Giugno", "Luglio", "agosto", "settembre", "ottobre", "novembre", "Dicembre" ][essay.month]+" "}{essay.year})
							</p>
						</div>
				))}
				</div>
			</div>
			<Footer/>
		</Fragment>
	);
}
