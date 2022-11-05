import Head from "next/head";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../style/global.scss";

export default function App(page) {
	return (
		<>
			<Head>
				<title>Claudio Pacifico | Ambasciatore d'Italia</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			</Head>
			<page.Component {...page.pageProps}/>
		</>
	);
}
