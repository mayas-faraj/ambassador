import React, {Fragment} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import Link from 'next/link';
import {useRouter} from 'next/router';
import axios from 'axios';
import {Helmet} from 'react-helmet';
import Pagination from 'components/Pagination';
import Glimmer from 'components/Glimmer';
import Footer from 'components/Footer';
import SettingContext from 'components/SettingContext';
import transparentImage from '/public/assets/imgs/transparent.png';
import textImage from '/public/assets/imgs/text.png';
import {ReactComponent as Seperator} from "/public/assets/imgs/seperator.svg";
import {ReactComponent as ShareIcon} from '/public/assets/imgs/share.svg';
import {ReactComponent as FullScreenIcon} from 'assets/imgs/full-screen.svg';
import {ReactComponent as FacebookButtonIcon} from 'assets/imgs/social-facebook.svg';
import {ReactComponent as TwitterButtonIcon} from 'assets/imgs/social-twitter.svg';
import {ReactComponent as LinkedinButtonIcon} from 'assets/imgs/social-linkedin.svg';
import style from '/style/Book.module.scss';

export default props=>{
	const router=useRouter();
	const slug=router.query.book;
	const context=React.useContext(SettingContext);
	const [book, setBook]=React.useState(null);
	const [books, setBooks]=React.useState([]);
	const [bookPageNumber, setBookPageNumber]=React.useState(1);
	const [bookPagesCount, setBookPagesCount]=React.useState(null);
	const [revisionPageNumber, setRevisionPageNumber]=React.useState(1);
	const [revisionPagesCount, setRevisionPagesCount]=React.useState(null);
	const [bookModal, setBookModal]=React.useState(false);
	const [revisionModal, setRevisionModal]=React.useState(false);
	const [pageOffset, setPageOffset]=React.useState(0);

	const listRef=React.useRef();
	const itemRef=React.useRef();

	React.useEffect(()=>{
		axios.post(context.backendApiUrl, {"operation": "read-book", "slug": slug})
		.then(result=>setBook(result.data[0]))
		.catch(ex=>console.log(ex));

		if(listRef.current && itemRef.current) listRef.current.scrollTop=itemRef.current.offsetTop;

	}, [slug]);

	React.useEffect(()=>{
		axios.post(context.backendApiUrl, {"operation": "read-books", "category": "libri"})
		.then(result=>setBooks(result.data))
		.catch(ex=>console.log(ex));
	}, []);

	const bookLoadEventHandler=({numPages}) => setBookPagesCount(numPages);
	const revisionLoadEventHandler=({numPages}) => setRevisionPagesCount(numPages);
				
	return (
		<Fragment key={slug}>
			<header className={style["book-header"]}>
				<Link href="/adad/#library" className={style["book-header__menu"]}>
				Libri e Pubblicazioni  dell’Ambasciatore d’Italia.<br/>
				Storia e cultura dei Paesi arabi e asiatici,<br/>
				luoghi in cui ha vissuto a lungo.
				</Link>
				<Seperator className="book-seperator section-seperator" />
			</header>
			{ book==null && <Glimmer/> }
			{
				book!=null && (
					<div className={style["book"]}>
						<div className={style["book-review"]}>
							{ 
								(books!=null && books.length>0) && (
									<div className={style["book-list"]} ref={listRef}>
										<div className={style["book-list-wrapper"]}>
										{
											books.filter(book=>book.image!=null && book.image!="").reverse().map(book=>book.image && (
												<Link key={book.slug} className={style["book-item"]} href={"/adad/libri/"+book.slug} title={book.title} ref={book.slug===slug?itemRef:null}>
													<img src={book.image?context.uploadsUrl+"/"+book.image:transparentImage} className={style["book-item__image"]} alt={book.title} />
												</Link>
											))
										}
										</div>
									</div>
								)
							}
							<div className={style["book-info"]}>
								<img className={style["book-info__img"]} src={book.image?context.uploadsUrl+"/"+book.image:transparentImage} alt={book.title} />
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
												<a href={`https://www.linkedin.com/sharing/share-offsite/?url=${document.location.href.replace("/adad", "/share.php")}`} target="_blank" rel="nofollow">
													<LinkedinButtonIcon/>
												</a>
											</li>
											<li className={style["book-info-share-item"]}>
												<a href={`https://facebook.com/sharer/sharer.php?u=${document.location.href.replace("/adad", "/share.php")}`} target="_blank" rel="nofollow">
													<FacebookButtonIcon/>
												</a>
											</li>
											<li className={style["book-info-share-item"]}>
												<a href={`https://twitter.com/intent/tweet/?url=${document.location.href.replace("/adad", "/share.php")}`} target="_blank" rel="nofollow">
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
								<div className={"book-browse__pdf"+(book.book_file_pages_per_view>1?" book-browse__pdf--multiple-page":"")}>
									<Document file={context.booksUrl+"/"+book.book_file} onLoadSuccess={bookLoadEventHandler} loading="Caricamento della pagina in corso..." className={(book.book_file_pages_per_view>1 &&(bookPageNumber<=1 || bookPagesCount<2*bookPageNumber-1))?"book-browse__pdf-single":""} onClick={()=>setBookModal(true)}>
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
								<div className={"book-browse__pdf"+(book.revision_file_pages_per_view>1?" book-browse__pdf--multiple-page":"")}>
									<Document file={context.booksUrl+"/"+book.revision_file} onLoadSuccess={revisionLoadEventHandler} loading="Caricamento della pagina in corso..." className={(book.revision_file_pages_per_view>1 &&(revisionPageNumber<=1 || revisionPagesCount<2*revisionPageNumber-1))?"book-browse__pdf-single":""} onClick={()=>setRevisionModal(true)}>
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
