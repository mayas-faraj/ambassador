import React from "react";
import Link from "next/link";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import style from "/style/footer.module.scss";

export default function Footer() {
	const icons=[
		{"image": "gran-teatro.png", "alt": "gran teatro logo", "title": "Gran teatro\nla fenice", "link": "https://www.teatrolafenice.it/"},
		{"image": "associazione-nazionale.png", "alt": "associazione nazionale logo", "title": "Associazione Nazionale\nCarabinieri", "link": "https://assocarabinieri.it/"},
		{"image": "presidenza-della.png", "alt": "presidenza della logo", "title": "Presidenza della \nrepubblica Italiana", "link": "https://www.quirinale.it/onorificenze/insigniti/133663"},
		{"image": "assocazione-nazionale-diplomatici.png", "alt": "assocazione nazionale diplomatici logo", "title": "Assocazione\nNazionale Diplomatici\nar.- constantino nigra", "link": "http://www.assdiplar.it/default.php"},
		{"image": "l-accademia-etrusca.png", "alt": "l-accademia etrusca logo", "title": "L’ACCADEMIA \nETRUSCA DI CORTONA", "link": "https://www.accademia-etrusca.org/"},
		{"image": "istituto-euro-mediterraneo.png", "alt": "istituto euro mediterraneo logo", "title": "Istituto \nEuro-mediterraneo\ne Per i paesi arabi", "link": "http://www.istitutoperilmondoarabo.it"},
		{"image": "ambasciata-tripoli.png", "alt": "ambasciata tripoli logo", "title": "", "link": "https://ambtripoli.esteri.it/ambasciata_tripoli/it/"},
		{"image": "ambasciata-cairo.png", "alt": "ambasciata cairo logo", "title": "", "link": "https://ambilcairo.esteri.it/ambasciata_ilcairo/it/ambasciata/news/dall-ambasciata/2010/06/l-ambasciatore-d-italia-al-cairo-s-e-claudio-pacifico-incontra-il-segretario-generale-della-lega-ar.html"},
		{"image": "ambasciata-teheran.png", "alt": "ambasciata teheran logo", "title": "", "link": "https://ambteheran.esteri.it/ambasciata_teheran/it/"},
		{"image": "ambasciata-khartoum.png", "alt": "ambasciata khartoum logo", "title": "", "link": "https://ambkhartoum.esteri.it/ambasciata_khartoum/it/"},
		{"image": "ambasciata-dhaka.png", "alt": "ambasciata dhaka logo", "title": "", "link": "https://ambdhaka.esteri.it/ambasciata_dhaka/it/ambasciata/"},
		{"image": "ambasciata-washington-dc.png", "alt": "ambasciata washington logo", "title": "", "link": "https://ambwashingtondc.esteri.it/ambasciata_washington/it"},
		{"image": "sapienza.png", "alt": "sapienze logo", "title": "La sapienza\nuniversità di roma", "link": "https://www.uniroma1.it/it/pagina-strutturale/home"},
		{"image": "luiss.png", "alt": "luiss logo", "title": "Luiss Università\nguido carli", "link": "https://www.luiss.it/"},
		{"image": "", "link": ""},
		{"image": "harvard-university.png", "alt": "harvard university logo", "title": "", "link": "https://www.harvard.edu/"},
		{"image": "associazione-pergine.png", "alt": "associazione pergine logo", "title": "Associazione \nAmici della storia", "link": "https://www.amicidellastoriapergine.it/"},
		{"image": "studi-diplomatici.png", "alt": "studi diplomatici logo", "title": "Circolo studi\ndiplomatici", "link": "http://www.studidiplomatici.it/il-circolo/"},
		{"image": "cambridge-university.png", "alt": "cambridge university logo", "title": "", "link": "https://www.cam.ac.uk/"},
		{"image": "", "link": ""},
	];

  const swiperIconIndex=[
    [0, 6, 12],
    [1, 7, 13],
    [2, 8, 15],
    [3, 9, 16],
    [4, 10, 17],
    [5, 11, 18]
  ];

	const [windowWidth, setWindowWidth]=React.useState(-1);
  const [topButtonVisible, setTopButtonVisible]=React.useState(false);
	React.useEffect(()=>{
		setWindowWidth(window.innerWidth);
	}, []);

  React.useEffect(()=>{
    const setTopButtonVisibleByScroll=()=>setTopButtonVisible(window.scrollY>=500);
    window.addEventListener("scroll", setTopButtonVisibleByScroll);
    return ()=>window.removeEventListener("scroll", setTopButtonVisibleByScroll);
  }, []);

	return (
		<footer id="footer" className={style["footer"]}>
			<a className={style["footer__button-top"]+(topButtonVisible?" "+style["footer__button-top--active"]:"")} href="#__next">^</a>
			<div className={style["footer-top"]}>
				<div className={style["footer-top__title"]}>fonti e SIti collegati</div>
				{ windowWidth>=600 && (
					<>
						<div className={style["footer-icons"]+" "+style["footer-icons--first-row"]}>
						{
							icons.filter((icon, index)=>index<6).map((icon, index)=>(
								<div key={icon.image} className={style["footer-icons__item"]+(icon.title.split("\n").length==2?" "+style["footer-icons__item--small-caption"]:"")}>
									<a target="_blank" href={icon.link} className={style["footer-icons__link"]}>
										<img src={"/assets/imgs/footer/"+icon.image} alt={icon.alt}/>
										<div className={style["footer-icons__title"]}>{icon.title}</div>
									</a>
								</div>
							))
						}
						</div>
						<div className={style["footer-icons"]+" "+style["footer-icons--second-row"]}>
						{
							icons.filter((icon, index)=>index>=6 && index<12).map((icon, index)=>(
								<div key={icon.image} className={style["footer-icons__item"]}>
									<a target="_blank" href={icon.link} className={style["footer-icons__link"]}>
										<img src={"/assets/imgs/footer/"+icon.image} alt={icon.alt}/>
										<div className={style["footer-icons__title"]}>{icon.title}</div>
									</a>
								</div>
							))
						}
						</div>
						<div className={style["footer-container"]+" "+style["footer-icons--third-row"]}>
							<div className={style["footer-icons"]+" "+style["footer-icons--left"]}>
							{
								icons.filter((icon, index)=>index>=12 && index<16).map((icon, index)=>(
									<div key={icon.image} className={style["footer-icons__item"]+(icon.image?"":" "+style["footer-icons__item--transparent"])}>
										<a target="_blank" href={icon.link} className={style["footer-icons__link"]}>
											<img src={icon.image?"/assets/imgs/footer/"+icon.image:"/assets/imgs/transparent.png"} alt={icon.alt}/>
											<div className={style["footer-icons__title"]}>{icon.title}</div>
										</a>
									</div>
								))
							}
							</div>
							<div className={style["footer-contact"]}>
								<div className={style["footer-contact__title"]}>Contacts</div>
								<p className={style["footer-contact__content"]}>	
									<br/>
									<a href="mainto:info@claudiopacificoambassador.com">Info@claudiopacificoambassador.com</a><br/><br/>	
									Website promoters<br/>
									Studio ADAD, Milan<br/> 
									<a href="mainto:info@adadonline.com">info@adadonline.com</a><br/><br/>
									Sede legale Studio Romani<br/>
									Via Giuseppe Ferrari n. 2<br/>
									00195, Rome<br/>
									Tel. <a href="tel:063221102">063221102</a> - <a href="tel:063221192">063221192</a><br/>
									Fax <a href="tel:0632507421">0632507421</a>
								</p>
							</div>
							<div className={style["footer-icons"]+" "+style["footer-icons--right"]}>
							{
								icons.filter((icon, index)=>index>=16 && index<20).map((icon, index)=>(
									<div key={icon.image} className={style["footer-icons__item"]+(icon.image?"":" "+style["footer-icons__item--transparent"])}>
										<a target="_blank" href={icon.link} className={style["footer-icons__link"]}>
											<img src={icon.image?"/assets/imgs/footer/"+icon.image:"/assets/imgs/transparent.png"} alt={icon.alt}/>
											<div className={style["footer-icons__title"]}>{icon.title}</div>
										</a>
									</div>
								))
							}
							</div>
						</div>
					</>)
				}
				{ (windowWidth>0 && windowWidth<600) && (
					<>
						<Swiper className={style["footer-swiper"]} modules={[Navigation]} spaceBetween={0} loop={true} grabCursor={true} slidesPerView={1} navigation>
						{
              swiperIconIndex.map(indexes=>(
                <SwiperSlide key={indexes.join(",")} className={style["footer-icons__slide"]}>
                {
                  indexes.map(index=>(
                    <a key={icons[index].image} target="_blank" href={icons[index].link} className={style["footer-icons__swiper-link"]}>
                      <img src={"/assets/imgs/footer/"+icons[index].image} alt={icons[index].alt}/>
                      <div className={style["footer-icons__title"]}>{icons[index].title}</div>
                    </a>
                  ))
                }
							  </SwiperSlide>
               ))
            }
						</Swiper>
            <div className={style["footer-contact"]+" "+style["footer-contact--mobile"]}>
								<div className={style["footer-contact__title"]}>Contacts</div>
								<p className={style["footer-contact__content"]}>	
									<br/>
									<a href="mainto:info@claudiopacificoambassador.com">Info@claudiopacificoambassador.com</a><br/><br/>	
									Website promoters<br/>
									Studio ADAD, Milan<br/> 
									<a href="mainto:info@adadonline.com">info@adadonline.com</a><br/><br/>
									Sede legale Studio Romani<br/>
									Via Giuseppe Ferrari n. 2<br/>
									00195, Rome<br/>
									Tel. <a href="tel:063221102">063221102</a> - <a href="tel:063221192">063221192</a><br/>
									Fax <a href="tel:0632507421">0632507421</a>
								</p>
						</div>
					</>)
				}	
		 	</div>
			<div className={style["footer-bottom"]}>
				<p className={style["footer-bottom__copyright"]}>
					Sito ufficiale <wbr/> dell’Ambasciatore Claudio Pacifico<br/>
					tutti i diritti sono riservati ©2022
				</p>
			</div>
		</footer>
	);
}
