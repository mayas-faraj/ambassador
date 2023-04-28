import React, {Fragment} from 'react';
import Link from 'next/link';
import axios from 'axios';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';
import Glimmer from './glimmer';
import SettingContext from './setting-context';
import style from '/style/publication.module.scss';
import 'swiper/css/pagination';

class Publications extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			books: null,
			categories: [],
			activeCategoryIndex: this.props.activeCategoryIndex,
			activeBookIndex: -1
		};

		this.categoryClickHandler=this.categoryClickHandler.bind(this);
	}

	static contextType=SettingContext;

	componentDidUpdate(prevProps) {
		if(this.state.categories.length>0 && prevProps.activeCategoryIndex!==this.props.activeCategoryIndex) {
			this.setState({activeCategoryIndex: this.props.activeCategoryIndex});
			this.categoryClickHandler(this.state.categories[this.props.activeCategoryIndex].name, this.props.activeCategoryIndex);
		}
	}

	componentDidMount() {
		this.pageAudio=new window.Audio('/assets/sounds/page.mp3');
		axios.post(this.context.backendApiUrl, {"operation": "read-publication-categories"})
		.then(result=>{
			this.setState({categories: result.data}, ()=>{
				let operation="";

				if(this.state.categories[this.state.activeCategoryIndex].name=="libri")
					operation="read-books";
				else if(this.state.categories[this.state.activeCategoryIndex].name=="saggi")
					operation="read-essays";

				if(operation)
					axios.post(this.context.backendApiUrl, {"operation": operation})
					.then(result=>this.setState({books: result.data}))
					.catch(err=>console.error(err));
			});
		})
		.catch(err=>console.error(err));
	}

	categoryClickHandler(name, index) {
		let operation="";
		this.setState({activeCategoryIndex: index}, ()=>{
			if(name=="libri")
				operation="read-books";
			else if(name=="saggi")
				operation="read-essays";
			if(operation)
				axios.post(this.context.backendApiUrl, {"operation": operation})
				.then(result=>this.setState({books: result.data}))
				.catch(err=>console.error(err));
			else
				this.setState({books: []});
		});
	}

	bookHoverEventHandler(index) {
		this.setState({activeBookIndex: index});
		try {
			this.pageAudio.currentTime=0;
			this.pageAudio.play();
		}
		catch (ex) {
			console.log("audio error: ", ex);
		}
	}

	initSwiperHandler(swiper) {
		//console.log(swiper, swiper.activeIndex);
	}

	render() {
		return (
			<div className={style["publications"]} ref={this.props.setRef}>
				<div className={style["publications-header"]}>
					<div className={style["publications-top"]}>
						<div key={this.state.activeBookIndex} className={style["publications-top__desc"]}>
						{(this.state.activeBookIndex<0 || this.state.books.length===0) && "si prega di spostare il mouse sul libro per leggere la prefazione"}
						{(this.state.activeBookIndex>=0 && this.state.books.length>0 && this.state.activeBookIndex<this.state.books.length) && (
							(this.state.categories[this.state.activeCategoryIndex].name=="libri") && (
								<Fragment>
									<h4 className={style["publications-top__book-title"]}>{this.state.books[this.state.activeBookIndex].title}</h4>
									<p className={style["publications-top__book-preface"]}>{this.state.books[this.state.activeBookIndex].preface}</p>
								</Fragment>
							) || (this.state.categories[this.state.activeCategoryIndex].name=="saggi") && (
								<h4 className={style["publications-top__book-title"]+" "+style["publications-top__book-title--prewrap"]}>{this.state.books[this.state.activeBookIndex].preface}</h4>
							)
						)}
						</div>
						{
							this.state.activeCategoryIndex===0 && (
								<p className={style["publications-top__mark"]}>
								Libri, Memorie, Opere narrative,<br/>
								Libri fotografici
								<br/>
								<span className={style["publications-top__mark-white"]}>
								Alcuni libri dell’Ambasciatore<br/>
								sono stati tradotti anche <br/>
								in altre lingue
								</span>
								</p>
								
						)}
						{
							this.state.activeCategoryIndex===1 && (
								<p className={style["publications-top__mark"]}>
									Saggi di politica internazionale e Articoli<br/>
									<span className={style["publications-top__mark-white"]}>
									Testi di Lezioni di Master, Interviste
									</span>
								</p>
								
						)}
					</div>
					<h2 className={style["publications-header__title"]}>{this.state.categories!=null && this.state.categories[this.state.activeCategoryIndex]!=null && this.state.categories[this.state.activeCategoryIndex].name}</h2>
				</div>
				<div className={style["publications-content"]}>
					{ this.state.books===null && <Glimmer/> }
					{ this.state.books!==null && (
						<Swiper key={this.state.books.length} modules={[Pagination]} spaceBetween={15} loop={false} centerInsufficientSlides={true} grabCursor={true} loopFillGroupWithBlank={true} loopedSlides={5-this.state.books.length%5} initialSlide={this.state.books.length-1} onUpdate={this.initSwiperHandler} pagination={{clickable: true}} breakpoints={{100: {slidesPerView: 1, slidesPerGroup: 1}, 550: {slidesPerView: 2, slidesPerGroup: 2}, 700: {slidesPerView: 3, slidesPerGroup: 3}, 900: {slidesPerView: 4, slidesPerGroup: 4}, 1100: {slidesPerView: 5, slidesPerGroup: 5}}}>
						{ this.state.books.length===0 && <p className={style["publications-noitems"]}>gli articoli arriveranno presto</p> }
						{ this.state.books.status!=="failed" && this.state.books.status!=="error" && this.state.books.map((book, index)=>(
								<SwiperSlide key={book.slug+book.image+book.title}>
										<Link href={"/"+this.state.categories[this.state.activeCategoryIndex].name+"/"+book.slug}>
											<a onMouseEnter={()=>this.bookHoverEventHandler(index)} className={style["publications-item"]+(index===this.state.activeBookIndex?" "+style["publications-item--active"]:"")} >
											<p className={style["publications-item__content"]+(!book.image?" "+style["publications-item__content--full-height"]:"")+" "+(/[ا-ي]/.test(book.title)?style["publications-item__content--arabic"]:"")}>
											{book.title}
											</p>
                      {
											book.image && <img src={book.image} className={style["publications-item__image"]} alt={book.title} />
                      }
											<h3 className={style["publications-item__title"]}>{(book.month?parseInt(book.month)+"/":"")+book.year}</h3>
											</a>
										</Link>
								</SwiperSlide>
						)) }
						</Swiper>
					)}
					<div className={style["publications-categories"]}>
					{
						this.state.categories!=null && this.state.categories.status!=="failed" && this.state.categories.filter(category=>category.name!=="uncategorized").map((category, index)=>(
							<a key={category.name} className={style["publications-category"]+" "+(index===this.state.activeCategoryIndex?style["publications-category__active"]: "")} href="#!" onClick={()=>this.categoryClickHandler(category.name, index)}>{category.name}</a>
						))
					}
					</div>
				</div>
			</div>
		);
	}
}

export default Publications;
