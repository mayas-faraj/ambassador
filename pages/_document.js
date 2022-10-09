import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
	return (
		<Html lang="it">
			<Head>
				<link rel="apple-touch-icon" href="/favicon.png"/>
				<link rel="icon" href="/favicon.png"/>
				<meta charSet="utf-8"/>
			</Head>
			<body>
				<Main/>
				<NextScript/>
			</body>
		</Html>
	);
}
