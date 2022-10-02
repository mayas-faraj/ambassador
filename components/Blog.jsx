import React from 'react';
import axios from 'axios';
import SettingContext from './SettingContext';
import Glimmer from './Glimmer.jsx';
import {ReactComponent as FacebookIcon} from '../assets/imgs/facebook-logo.svg';
import {ReactComponent as LinkedinIcon} from '../assets/imgs/linkedin-logo.svg';
import {ReactComponent as TwitterIcon} from '../assets/imgs/twitter-logo.svg';
import {ReactComponent as YoutubeIcon} from '../assets/imgs/youtube-logo.svg';
import {ReactComponent as FacebookButtonIcon} from '../assets/imgs/social-facebook.svg';
import {ReactComponent as TwitterButtonIcon} from '../assets/imgs/social-twitter.svg';
import {ReactComponent as LinkedinButtonIcon} from '../assets/imgs/social-linkedin.svg';
import {ReactComponent as YoutubeButtonIcon} from '../assets/imgs/social-youtube.svg';
import {ReactComponent as InstagramButtonIcon} from '../assets/imgs/social-instagram.svg';
import {ReactComponent as ArrowImage} from '/public/assets/imgs/arrow.svg';
import {ReactComponent as MobileImage} from '../assets/imgs/iphone-dark.svg';
import style from '../style/Blog.module.scss';

const SOCIALS=[
	{
		"app": "linkedin", 
		"enabled": true,
		"icon": <LinkedinButtonIcon className={style["social-linkedin"]}/>
	},
	{
		"app": "twitter", 
		"enabled": true,
		"icon": <TwitterButtonIcon className={style["social-twitter"]}/>
	},
	{
		"app": "facebook", 
		"enabled": true,
		"icon": <FacebookButtonIcon className={style["social-facebook"]}/>
	},
	{
		"app": "youtube", 
		"enabled": true,
		"icon": <YoutubeButtonIcon className={style["social-youtube"]}/>
	},
	{
		"app": "instagram", 
		"enabled": false,
		"icon": <InstagramButtonIcon className={style["social-instagram"]}/>
	}
];

const MONTHS=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const VISIBLE_BLOGS_COUNT=2;

class Blog extends React.Component {
	constructor(props) {
		super(props);
		this.state={ currentSocial: "twitter", blogs: null, blogIndex: 0};
		this.arrowUpClickHandler=this.arrowUpClickHandler.bind(this);
		this.arrowDownClickHandler=this.arrowDownClickHandler.bind(this);
		this.socialClickHandler=this.socialClickHandler.bind(this);
		this.mobileRef=React.createRef();
	}

	static contextType=SettingContext;

	componentDidMount() {
		axios.post(this.context.backendApiUrl, {"operation": "read-blogs"})
		.then(result=>this.setState({blogs: result.data}))
		.catch(err=>console.error(err));
		setTimeout(()=>{
			if(this.mobileRef.current)
				this.mobileRef.current.scrollTo(0, 100);
		}, 5000);
	}

	arrowUpClickHandler() {
		if(this.state.blogIndex>0) this.setState((prevState, props)=>this.setState({blogIndex: prevState.blogIndex-1}));
	}

	arrowDownClickHandler() {
		if(this.state.blogIndex<this.state.blogs.length-1) this.setState((prevState, props)=>this.setState({blogIndex: prevState.blogIndex+1}));
	}

	socialClickHandler(social) {
		if(social.enabled) {
			this.setState({currentSocial: social.app});
		}
	}

	formatDate(date) {
		return `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getYear()+1900}`;
	}


	render() {
		return (
			<div className={style["blog"]}>
				<div className={style["blog-header"]}>
					<h2 className={style["blog-header__title"]}>blog</h2>
					<p className={style["blog-header__desc"]}>
					Leggi il meglio degli approfondimenti<br/>
					<em> dell’Ambasciatore d’Italia</em> sulle attualità
					</p>
				</div>
				<div className={style["blog-content"]}>
					<div className={style["blog-socials"]}>
						<h3 className={style["blog-social__text"]}>Partecipa anche tu<br/>con l'Ambasciatore<br/>sui social media</h3>
						<div className={style["blog-social-wrapper"]}>
							<MobileImage className={style["blog-social-mobile-cover"]} />
							{
								this.state.currentSocial==="twitter" && (
								<div className="blog-social-app blog-twitter" ref={this.mobileRef}>
									<div className="blog-overlay blog-overlay--twitter"><TwitterIcon/></div>
									<a className={style["twitter-timeline"]} data-theme="dark" href="https://twitter.com/CLAUDIOPACIFIC2?ref_src=twsrc%5Etfw">Tweets by CLAUDIOPACIFIC2</a> 
									<Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnLoad" charSet="utf-8"></Script>
								</div>
								)
							}
							{
								this.state.currentSocial==="linkedin" && (
								<div className="blog-social-app blog-linkedin">
									<div className="blog-overlay blog-overlay--linkedin"><LinkedinIcon/></div>
									<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6932074033874108416" allowFullScreen={true} title="Embedded post" width="130%" height="640" frameBorder="0"></iframe>				
									{/*
									<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6932071696174592000" allowFullScreen={true} title="Embedded post" width="100%" height="498" frameBorder="0"></iframe>
									<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6931716156479148032" allowFullScreen={true} title="Embedded post" width="100%" height="318" frameBorder="0"></iframe>
									<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6931697301937602560" allowFullScreen={true} title="Embedded post" width="100%" height="386" frameBorder="0"></iframe>
									<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6931392254641070080" allowFullScreen={true} title="Embedded post" width="100%" height="430" frameBorder="0"></iframe>
									<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6931388452206718976" allowFullScreen={true} title="Embedded post" width="100%" height="366" frameBorder="0"></iframe>
									<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6931383147997581312" allowFullScreen={true} title="Embedded post" width="100%" height="342" frameBorder="0"></iframe>
									<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6931381886590029824" allowFullScreen={true} title="Embedded post" width="100%" height="434" frameBorder="0"></iframe>
									*/}
								</div>

								)
							}
							{
								this.state.currentSocial==="facebook" && (
								<div className="blog-social-app blog-facebook">
									<div className="blog-overlay blog-overlay--facebook"><FacebookIcon/></div>
									<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fclaudio.pacifico.142&tabs=timeline&width=400&height=800&small_header=true&adapt_container_width=false&hide_cover=true&show_facepile=false&appId=696344208282821" width="400" height="800" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
								</div>
								)
							}
							{
								this.state.currentSocial==="youtube" && (
								<div className="blog-social-app blog-youtube">
									<div className="blog-overlay blog-overlay--youtube"><YoutubeIcon/></div>
									<iframe width="196" height="150" src="https://www.youtube.com/embed/Cp0aAExQo8Q" title="Claudio Pacifico videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
									<iframe width="196" height="150" src="https://www.youtube.com/embed/YTvNHlmwksI" title="Claudio Pacifico videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
									<iframe width="196" height="150" src="https://www.youtube.com/embed/WyVP1463t4w" title="Claudio Pacifico videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
									<iframe width="196" height="150" src="https://www.youtube.com/embed/v5VdGOJHb7U" title="Claudio Pacifico videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
									<iframe width="196" height="150" src="https://www.youtube.com/embed/n2M-9K-txoc" title="Claudio Pacifico videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
									<iframe width="196" height="150" src="https://www.youtube.com/embed/5BEnbcar2A4" title="Claudio Pacifico videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
									<iframe width="196" height="150" src="https://www.youtube.com/embed/icWZhFitRH8" title="Claudio Pacifico videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
									<iframe width="196" height="150" src="https://www.youtube.com/embed/8mQIce382qY" title="Claudio Pacifico videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
									<iframe width="196" height="150" src="https://www.youtube.com/embed/moPMdOmFOBQ" title="Claudio Pacifico videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
									<iframe width="196" height="150" src="https://www.youtube.com/embed/M9az2QN03Cs" title="Claudio Pacifico videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
									<iframe width="196" height="150" src="https://www.youtube.com/embed/BZE6MdnS5bg" title="Claudio Pacifico videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
									<iframe width="196" height="150" src="https://www.youtube.com/embed/WA9vTgu6o3Q" title="Claudio Pacifico videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
									<iframe width="196" height="150" src="https://www.youtube.com/embed/4Jc7PXQFJnk" title="Claudio Pacifico videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
									<iframe width="196" height="150" src="https://www.youtube.com/embed/srOa0zxTRiE" title="Claudio Pacifico videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
								</div>
								)
							}
						</div>
						<div className={style["blog-social-icons"]}>
						{
							SOCIALS.map(social=>(
								<div key={social.app} className={style["blog-social-icon"]}>
									<span className={"blog-social-icon__link"+(social.app===this.state.currentSocial?" blog-social-icon__link--active":"")} onClick={()=>this.socialClickHandler(social)}>
									{social.icon}
									</span>
								</div>
							))
						}
						</div>
					</div>
					<div className={style["blog-view"]}>
						{ this.state.blogs==null && <Glimmer/> }
						{ this.state.blogs!=null && this.state.blogs.length===0 && <p className={style["blog-noitems"]}>gli articoli arriveranno presto</p> }
						{ this.state.blogs!=null && this.state.blogs.status!=="failed" && this.state.blogs.map((blog, index)=>(
							(index>=this.state.blogIndex && index<this.state.blogIndex+VISIBLE_BLOGS_COUNT) && <div key={blog.title+blog.image} className={style["blog-item"]}>
								<a className={style["blog-item__link"]} href={blog.source_link?blog.source_link:""} target="_blank" rel="noreferrer">
									<img src={this.context.uploadsUrl+"/"+blog.image} className={style["blog-item__image"]} alt={blog.title}/>
									<div className={style["blog-info"]}>
										<span className={style["blog-info__category"]}>{blog.type}</span>
										<h3 className={style["blog-info__title"]}>{blog.title.replaceAll("\\n", "\n")}</h3>
										<svg className={style["blog-info__seperator"]}>
											<line x1="0" y1="0" x2="100%" y2="0"/>
											<line x1="0" y1="100%" x2="100%" y2="100%"/>
										</svg>
										
										<div className={style["blog-info__source"]}>{(blog.source_name?blog.source_name + " / ":"") + (blog.post_date!=="0000-00-00 00:00:00"?this.formatDate(new Date(blog.post_date)):"")}</div>
									</div>
								</a>
							</div>
						)) }
						<div className={style["blog-arrows"]}>
							<a href="#!" className={"blog-arrows__image-up"+((this.state.blogs!=null && this.state.blogs.length>VISIBLE_BLOGS_COUNT && this.state.blogIndex>0)?"":" blog-arrows__image--unvisible")} onClick={this.arrowUpClickHandler}><ArrowImage/></a>
							<a href="#!" className={"blog-arrows__image-down"+((this.state.blogs!=null && this.state.blogs.length>VISIBLE_BLOGS_COUNT && this.state.blogIndex!==this.state.blogs.length-VISIBLE_BLOGS_COUNT)?"":" blog-arrows__image--unvisible")} onClick={this.arrowDownClickHandler}><ArrowImage/></a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Blog;
