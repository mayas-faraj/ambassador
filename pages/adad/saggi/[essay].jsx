import React, {Fragment} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Link from 'next/link';
import Head from 'next/head';
import {useRouter} from 'next/router';
import axios from 'axios';
import {pdfjs, Document, Page} from 'react-pdf';
import Pagination from '/components/pagination';
import Glimmer from '/components/glimmer';
import Footer from '/components/footer';
import SettingContext from '/components/setting-context';
import Seperator from "/public/assets/imgs/seperator.svg";
import style from '/style/essay.module.scss';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default props=>{
	const router=useRouter();
	const slug=router.query.essay;
	const essays=props.essays;

	const context=React.useContext(SettingContext);
	const [bookPagesCount, setBookPagesCount]=React.useState([]);
	const [bookModal, setBookModal]=React.useState(false);
	const [pageOffset, setPageOffset]=React.useState(0);

	const listRef=React.useRef();
	const itemRef=React.useRef();

	React.useEffect(()=>{
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
			{
				essays!=null && (
				<Head>
					<title>{essays[0].title + " | Claudio Pacifico libri"}</title>
					<meta property="og:title" content={essays[0].title + " | Claudio Pacifico libri"}/>
					<meta name="description" content={essays[0].book_name}/>
					<meta property="og:description" content={essays[0].book_name}/>
					{essays[0].image && <meta property="og:image" content={context.uploadsUrl+"/"+essays[0].image} />}
				</Head>)
			}
			<header className={style["essay-header"]}>
				<Link href="/adad/#saggi">
					<a className={style["essay-header__menu"]}>
						Saggi e articoli di politica estera
					</a>
				</Link>
				<Seperator viewBox={"0 0 331 34"} className={style["essay-seperator"] + " section-seperator"} />
			</header>
			{ !essays && <Glimmer/> }
			<div className="essays">
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
								<span className={style["essay-info__title"]}>{essay.title}</span>
								<span className={style["essay-info__meta"]}>{essay.book_name?essay.book_name:""}{essay.city?essay.city+", ":""}{(essay.month!=null && essay.month>=0) && [ "Gennaio", "febbraio", "Marzo", "aprile", "Maggio", "Giugno", "Luglio", "agosto", "settembre", "ottobre", "novembre", "Dicembre" ][essay.month]+" "}{essay.year}</span>
							</p>
						</div>
				))}
				</div>
			</div>
			<Footer/>
		</Fragment>
	);
}

export async function getStaticPaths() {
	const siteUrls=require("/public/siteUrls"); 
	const data=await fetch(siteUrls.backendApiUrl, {
		"method": "post", "headers": {
			"Content-Type": "application/json"
		}, 
		"body": JSON.stringify({"operation": "read-essays"})
	});
	const essays=await data.json();
	return {
		"fallback": "blocking",
		"paths": essays.map(essay=>({"params": {"essay": essay.slug}}))
	};
}

export async function getStaticProps(context) {
	const siteUrls=require("/public/siteUrls"); 
	const essaysData=await fetch(siteUrls.backendApiUrl, {
		"method": "post", "headers": {
			"Content-Type": "application/json"
		}, 
		"body": JSON.stringify({"operation": "read-essays"})
	});
	const essays=await essaysData.json();

	return {
		"props": {
			"essays": essays.reverse()
		}
	};
}

