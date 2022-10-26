import React, {Fragment} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import {pdfjs, Document, Page} from 'react-pdf';
import Link from 'next/link';
import Head from 'next/head';
import {useRouter} from 'next/router';
import axios from 'axios';
import Pagination from '/components/pagination';
import Glimmer from '/components/glimmer';
import Footer from '/components/footer';
import SettingContext from '/components/setting-context';
import transparentImage from '/public/assets/imgs/transparent.png';
import textImage from '/public/assets/imgs/text.png';
import Seperator from "/public/assets/imgs/seperator.svg";
import ShareIcon from '/public/assets/imgs/share.svg';
import FullScreenIcon from '/public/assets/imgs/full-screen.svg';
import FacebookButtonIcon from '/public/assets/imgs/social-facebook.svg';
import TwitterButtonIcon from '/public/assets/imgs/social-twitter.svg';
import LinkedinButtonIcon from '/public/assets/imgs/social-linkedin.svg';
import siteUrls from '/public/siteUrls.json';
import style from '/style/book.module.scss';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function Book(props) {
	const router=useRouter();
	const slug=router.query.book;
	const context=React.useContext(SettingContext);
	const [bookPageNumber, setBookPageNumber]=React.useState(1);
	const [bookPagesCount, setBookPagesCount]=React.useState(null);
	const [revisionPageNumber, setRevisionPageNumber]=React.useState(1);
	const [revisionPagesCount, setRevisionPagesCount]=React.useState(null);
	const [bookModal, setBookModal]=React.useState(false);
	const [revisionModal, setRevisionModal]=React.useState(false);
	const [pageOffset, setPageOffset]=React.useState(0);
	const book=props.book;
	const books=props.books;

	const listRef=React.useRef();
	const itemRef=React.useRef();

	const bookLoadEventHandler=({numPages}) => setBookPagesCount(numPages);
	const revisionLoadEventHandler=({numPages}) => setRevisionPagesCount(numPages);
				
	return (
		<Fragment key={slug}>
			{props.book!=null && (
				<Head>
					<title>{props.book.title + " | Claudio Pacifico libri"}</title>
					<meta property="og:title" content={props.book.title + " | Claudio Pacifico libri"}/>
					<meta name="description" content={props.book.preface}/>
					<meta property="og:description" content={props.book.preface}/>
					{props.book.image && <meta property="og:image" content={context.uploadsUrl+"/"+props.book.image} />}
				</Head>
			)}
			<header className={style["book-header"]}>
				<Link href="/adad/#library">
					<a className={style["book-header__menu"]}>
					Libri e Pubblicazioni  dell’Ambasciatore d’Italia.<br/>
					Storia e cultura dei Paesi arabi e asiatici,<br/>
					luoghi in cui ha vissuto a lungo.
					</a>
				</Link>
				<Link href="/adad/#library"><a>
					<Seperator viewBox="0 0 331 34" className={style["book-seperator"]+" section-seperator"} />
				</a></Link>
			</header>
			{ book==null && <Glimmer/> }
			{
				book!=null && (
					<div className={style["book"]+ " book-page"}>
						<div className={style["book-review"]}>
							{ 
								(books!=null && books.length>0) && (
									<div className={style["book-list"]} ref={listRef}>
										<div className={style["book-list-wrapper"]}>
										{
											books.filter(book=>book.image!=null && book.image!="").reverse().map(book=>book.image && (
												<Link key={book.slug} href={"/adad/libri/"+book.slug} title={book.title} ref={book.slug===slug?itemRef:null}>
													<a className={style["book-item"]}>
														<img src={book.image?context.uploadsUrl+"/"+book.image:transparentImage.src} className={style["book-item__image"]} alt={book.title} />
													</a>
												</Link>
											))
										}
										</div>
									</div>
								)
							}
							<div className={style["book-info"]}>
								<img className={style["book-info__img"]} src={book.image?context.uploadsUrl+"/"+book.image:transparentImage.src} alt={book.title} />
								<div className={style["book-info-contentiner"]}>
									<h1 className={style["book-info__title"]}>{book.title}</h1>
									{book.author && <div className={style["book-info__meta"]}>editore: {book.author}</div>}
									{book.city && <div className={style["book-info__meta"]}>luogo: {book.city}</div>}
									{book.year && <div className={style["book-info__meta"]}>anno: {(book.month!=null && book.month>=0) && [ "Gennaio", "febbraio", "Marzo", "aprile", "Maggio", "Giugno", "Luglio", "agosto", "settembre", "ottobre", "novembre", "Dicembre" ][book.month]}, {book.year}</div>}

																		{book.language && <div className={style["book-info__meta"]}>lingua: {book.language}</div>}
									{book.series && <div className={style["book-info__meta"]}>collana: {book.series}</div>}
									{book.pages_count && book.pages_count!=="0" && <div className={style["book-info__meta"]}>numero di pagine: {book.pages_count}</div>}
									{book.comment && <div className={style["book-info__meta"]}>{book.comment.replaceAll("\\n", "\n")}</div>}
									{book.format && <div className={style["book-info__meta"]}>formato: {book.format}</div>}
									{book.isbn && <div className={style["book-info__meta"]}>ISBN: {book.isbn}</div>}
									<div className={style["book-info-share"]}>
										<ShareIcon className={style["book-info-share__icon"]}/>
										<ul className={style["book-info-share-list"]}>
											<li className={style["book-info-share-item"]}>
												<a href={`https://www.linkedin.com/sharing/share-offsite/?url=${siteUrls.siteUrl}/libri/${book.slug}`} target="_blank" rel="nofollow">
													<LinkedinButtonIcon/>
												</a>
											</li>
											<li className={style["book-info-share-item"]}>
												<a href={`https://facebook.com/sharer/sharer.php?u=${siteUrls.siteUrl}/libri/${book.slug}`} target="_blank" rel="nofollow">
													<FacebookButtonIcon/>
												</a>
											</li>
											<li className={style["book-info-share-item"]}>
												<a href={`https://twitter.com/intent/tweet/?url=${siteUrls.siteUrl}/libri/${book.slug}`} target="_blank" rel="nofollow">
													<TwitterButtonIcon/>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className={style["book-content"]}>
								<p className={style["book-content__text"]}>{book.content!="" && book.content || "il contenuto sarà disponibile il prima possibile"}</p>
							</div>
						</div>
						{
							book.book_file && (
							<div className={style["book-browse-basic"]}>
								<Pagination onPageChange={(pageNumber)=>setBookPageNumber(pageNumber)} activePage={bookPageNumber} pagesCount={Math.floor(bookPagesCount/book.book_file_pages_per_view)} />
								<div className={style["book-browse__pdf"]+" "+(book.book_file_pages_per_view>1?"book-browse__pdf--multiple-page":"")}>
									<Document file={context.booksUrl+"/"+book.book_file} onLoadSuccess={bookLoadEventHandler} loading="Caricamento della pagina in corso..." className={(book.book_file_pages_per_view>1 &&(bookPageNumber<=1 || bookPagesCount<2*bookPageNumber-1))?style["book-browse__pdf-single"]:""} onClick={()=>setBookModal(true)}>
										<Page width={3000} pageNumber={book.book_file_pages_per_view>1?2*bookPageNumber-1:bookPageNumber} />
										{book.book_file_pages_per_view>1 && <Page width={3000} pageNumber={2*bookPageNumber} />}
									</Document>
								</div>
								<p className={style["book-browse__text"]}>contenuti</p>
								<Dialog open={bookModal} onClose={()=>setBookModal(false)} maxWidth={"lg"} fullWidth={true}>
									<DialogContent>
										<a href={context.booksUrl+"/"+book.book_file} className={style["book-browse__fullscreen-link"]} target="_blank">
											<FullScreenIcon/>
										</a>
										<iframe className={style["book-browse__iframe"]} src={context.booksUrl+"/"+book.book_file}/>
									</DialogContent>
								</Dialog>
							</div>
						)}
						{
							book.revision_file && (
							<div className={style["book-browse-revision"]}>
								<Pagination onPageChange={(pageNumber)=>setRevisionPageNumber(pageNumber)} activePage={revisionPageNumber} pagesCount={Math.floor(revisionPagesCount/book.revision_file_pages_per_view)} />
								<div className={style["book-browse__pdf"]+" "+(book.revision_file_pages_per_view>1?"book-browse__pdf--multiple-page":"")}>
									<Document file={context.booksUrl+"/"+book.revision_file} onLoadSuccess={revisionLoadEventHandler} loading="Caricamento della pagina in corso..." className={(book.revision_file_pages_per_view>1 &&(revisionPageNumber<=1 || revisionPagesCount<2*revisionPageNumber-1))?style["book-browse__pdf-single"]:""} onClick={()=>setRevisionModal(true)}>
										<Page width={3000} pageNumber={book.revision_file_pages_per_view>1?2*revisionPageNumber-1:revisionPageNumber}/>
										{book.revision_file_pages_per_view>1 && <Page width={3000} pageNumber={2*revisionPageNumber}/>}
									</Document>
								</div>
								<p className={style["book-browse__text"]}>recensioni</p>
								<Dialog open={revisionModal} onClose={()=>setRevisionModal(false)} maxWidth={"lg"} fullWidth={true}>
									<DialogContent>
										<a href={context.booksUrl+"/"+book.revision_file} className={style["book-browse__fullscreen-link"]} target="_blank">
											<FullScreenIcon/>
										</a>
										<iframe className={style["book-browse__iframe"]} src={context.booksUrl+"/"+book.revision_file}/>
									</DialogContent>
								</Dialog>

							</div>
						)}
					</div>
			)}
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
		"body": JSON.stringify({"operation": "read-books"})
	});
	const posts=await data.json();
	return {
		"fallback": "blocking",
		"paths": posts.map(post=>({"params": {"book": post.slug}}))
	};
}

export async function getStaticProps(context) {
	const siteUrls=require("/public/siteUrls"); 
	const bookData=await fetch(siteUrls.backendApiUrl, {
		"method": "post", "headers": {
			"Content-Type": "application/json"
		}, 
		"body": JSON.stringify({"operation": "read-book", "slug": context.params.book})
	});
	const book=await bookData.json();
	const booksData=await fetch(siteUrls.backendApiUrl, {
		"method": "post", "headers": {
			"Content-Type": "application/json"
		}, 
		"body": JSON.stringify({"operation": "read-books"})
	});
	const books=await booksData.json();

	return {
		"props": {
			"book": book[0],
			"books": books
		}
	};
}

